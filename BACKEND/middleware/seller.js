import jwt from "jsonwebtoken"
import { Seller } from "../db/seller.js"

export const userCheckup = (req, res, next) => {
    const auth = req.headers.authentication;
    const token = auth.split(" ")[1];
    const decode = jwt.decode(token);
    const id = decode.id;


}

export const JWT_seller_authentication = async (req, res, next) => {
    const auth = req.headers.authentication
    const token = auth.split(" ")[1]

    try{
        const decode = jwt.verify(token, process.env.JWT_PASSWORD)

        const id = decode.sellerId

        const seller = await Seller.findById(id)
        if(seller){
            if(seller.verified){
                next()
            }else{
                return res.json({
                    error : "Seller not verified"
                })
            }
        }else{
            return res.json({
                error : "Seller ID not found"
            })
        }
    }catch(err){
        return res.json({
            error : "Invalid seller registration token"
        })
    }

    
}