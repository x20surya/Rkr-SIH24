import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"
import {User} from "../db/user.js"
import env from "dotenv"
import zod from "zod"
import { sendMail } from "../services/mailsender.js"

env.config()

export const userJWTAuthentication = async (req, res, next) => {
    if(!req.headers.authentication.split(" ")[0] === "Pookie"){
        return res.json({
            error : "Invalid Authentication Token"
        })
    }
    const token = req.headers.authentication.split(" ")[1]

    try{
        const decode = jwt.verify(token, process.env.JWT_PASSWORD)
        if(decode){
            next();
        }
    }catch(err){
        return res.json({
            error : "JWT not Verified"
        })
    }
}

export const emailVerification = async(req, res, next) => {
    const email = req.body.email
    sendMail(email)
    next();
}

export const emailCheckUp = async (req, res, next) => {
    const email = req.body.email
    const check =await User.findOne({email})
    if(check){
        if(check.emailVerified){
            return res.json({
                email,
                error : "Email already exists"
            })
        }else{
            sendMail(email)
            return res.json({
                email,
                error : "Verification link resent"
                //IDEA - add a limit to number of emails sent to a particular email within some
            })
        }   
    }else{
        next()
    }
}


// const emailSchema = zod.string().email()
// const passwordSchema = zod.string().min(8)
// const usernameSchema = zod.string().min(6)

// export const inputValidation = (req, res, next) => {
//     const email = req.body.email
//     const password = req.body.password
//     const username = req.body.username

//     if(emailSchema.safeParse(email).success)
// }