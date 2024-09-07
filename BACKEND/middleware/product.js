import { Product } from "../db/product.js"
import { Seller } from "../db/seller.js"
import jwt from "jsonwebtoken"

export const sellerHasProduct =async (req, res, next) => {
    const auth = req.headers.authentication
    const token = auth.split(" ")[1]
    const decode = jwt.decode(token)
    const sellerId = decode.sellerId

    const pid = req.body.product

    const seller = await Seller.findById(sellerId)

    let exists = false

    seller.products.map(async (product) => {
        if(pid == product){
            exists = true
        }
    })
    if(exists){
        next()
    }else{
        return res.json({
            error : "Product not found for the seller"
        })
    }
}

export const productExists = async (req, res, next) => {
    const pid = req.body.product

    const product = await Product.findById(pid)

    if(product){
        next()
    }else{
        return res.json({
            error : "Product Not Found"
        })
    }
}