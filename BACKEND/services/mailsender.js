import nodemailer from "nodemailer"
import env from "dotenv"
import jwt from "jsonwebtoken"

env.config()

export const sendMail = (email) => {
    
    const token = jwt.sign({
        email
    }, process.env.EMAIL_JWT_PASSWORD)

    const auth = nodemailer.createTransport({
        service : "gmail",
        secure : true,
        port : 465,
        auth: {
            user : "streamthread2206@gmail.com",
            pass : process.env.EMAIL_PASSWORD
        }
    })

    const reciever = {
        from : "streamthread2206@gmail.com",
        to : email,
        subject : "Self Attendance App E-mail Verification",
        text : `Click on the following link to verify \n ${process.env.DOMAIN}user/confirmation/${token}`
    
    }

    auth.sendMail(reciever, (err, msg) => {
        if(err){
            throw err
        }
        console.log("Success")
        response.end()
    })

}
