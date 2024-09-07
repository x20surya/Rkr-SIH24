import { Router } from "express";
import { userJWTAuthentication } from "../middleware/user.js";
import { Seller } from "../db/seller.js";
import jwt from 'jsonwebtoken'

const router = Router()

router.post("/signup",userJWTAuthentication, (req, res) => {
    const auth = req.headers.authentication
    const token = auth.split(" ")[1]
    const decode = jwt.decode(token)
    const userID = decode.id
    const email = decode.email
    const first_name = decode.first_name
    const last_name = decode.last_name

    const description = req.body.description
    const location = {
        latitude : req.body.latitude,
        longitude : req.body.longitude
    }

    const seller = new Seller({
        userID,
        products : [],
        location,
        description,
        verified : false
    })
    seller.save()  

    return res.json({
        id : seller.id
    })
})

router.post("/signin",userJWTAuthentication, async (req, res) => {
    const auth = req.headers.authentication
    const token = auth.split(" ")[1]
    const decode = jwt.decode(token)
    const userID = decode.id
    const email = decode.email
    const first_name = decode.first_name
    const last_name = decode.last_name

    const seller = await Seller.findOne({userID})

    if(seller){
        if(seller.verified){
            const seller_token = jwt.sign({
                sellerId : seller.id,
                email,
                id : userID,
                first_name,
                last_name
            }, process.env.JWT_PASSWORD)
            
            return res.json({
                token : seller_token,
                email,
                first_name,
                last_name,
                id : userID,
                sellerId : seller.id
            })
        }else{
            return res.json({
                error : "Seller not verified"
            })
        }
    }else{
        return res.json({
            error : "No seller account found for this user"
        })
    }


})


export default router