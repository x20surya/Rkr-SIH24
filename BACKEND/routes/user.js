import { Router } from "express";
import { Lists, User } from "../db/user.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { emailCheckUp, emailVerification, userJWTAuthentication } from "../middleware/user.js";
import { listAdder, listEditor } from "../services/list.js";

const router = Router()

router.post("/signup",emailCheckUp, emailVerification ,async (req, res)=> {
    const email = req.body.email
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const password = req.body.password
    const cartProducts = req.body.cart
    
    const salt = bcrypt.genSaltSync(10)
    const hash = await bcrypt.hash(password, salt)

    const user = new User({
        emailVerified : false,
        first_name,
        last_name,
        email,
        password : hash,
        address : [],
        collections : [],
        orders : []
    })

    const cart = listAdder(`cart_${user.id}`, user.id)
    const wishlist = listAdder(`wishlist_${user.id}`, user.id)

    user.cart = cart
    user.wishlist = wishlist
    
    user.save()

    return res.json({
        email,
        first_name,
        last_name
    })
})

router.get("/confirmation/:token", async (req, res)=>{
    const token = req.params.token

    try{
        const decode = jwt.verify(token, process.env.EMAIL_JWT_PASSWORD)
        const email = decode.email
        const user = await User.findOneAndUpdate({email}, {emailVerified : true})
        if(!user){
            return res.json({
                error : "User does not exist"
            })
        }
        user.save()
        return res.send(`<h1>Email Verified</h1><h3>Thankyou for signing in with Self Attendance App</h3><a href="${process.env.FRONTEND_WEB_DOMAIN}signin">Continue With SignIn</a>`)
    }catch(err){
        console.log("Error Occured in Corfirming Email")
        return res.json({
            error : "Error Occured in verifying email"
        })
    }
})


router.post("/signin", async (req, res)=>{
    const email = req.body.email
    const password = req.body.password

    const user = await User.findOne({email})
    if(user){
        const temp = await bcrypt.compare(password, user.password)
        if(temp){
            if(user.emailVerified){
                const first_name = user.first_name
                const id = user.id
                const token = jwt.sign({
                    id,
                    email,
                    first_name,
                }, process.env.JWT_PASSWORD)
                
                return res.json({
                    email,
                    first_name,
                    token
                })
            }else{
                return res.json({
                    error : "Email not Verified"
                })
            }
        }else{
            return res.json({
                error : "Incorrect Password"
            })
        }
        
    }else{
        return res.json({
            error : "Email not Found"
        })
    }
})

router.post("/updateList" ,userJWTAuthentication , (req, res) => {
    const action = req.body.action
    const auth = req.headers.authentication
    const token = auth.split(" ")[1]
    const decode = jwt.decode(token)
    const Id = decode.id
    const pid = req.body.products

    try{
        listEditor(Id, pid, action)
    }catch(err){
        return res.json({
            error : err.message
        })
    }
    return res.json({
        msg : "Item Added"
    })
})

router.post("/addList",userJWTAuthentication, (req, res) => {
    const name = req.body.name
    const auth = req.headers.authentication
    const token = auth.split(" ")[1]
    const decode = jwt.decode(token)
    const ID = decode.id

    const list = new Lists({
        name,
        user : ID,
        products : []
    })
    list.save()
    return res.json({
        msg : "Added"
    })
})

router.use((err, req, res, next) => {
    console.log("Error occured in User Routes")
})
export default router