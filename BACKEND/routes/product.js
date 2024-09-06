import { Router } from "express";
import { JWT_seller_authentication } from "../middleware/seller.js";
import { Product } from "../db/product.js";
import { Seller } from "../db/seller.js";
import jwt from "jsonwebtoken"
import { userJWTAuthentication } from "../middleware/user.js";
import { productExists, sellerHasProduct } from "../middleware/product.js";

const router = Router()

router.post("/add",JWT_seller_authentication ,async (req, res) => {
    const auth = req.headers.authentication
    const token = auth.split(" ")[1]
    const decode = jwt.decode(token)
    const sellerId = decode.sellerId

    const stock = req.body.stock
    const dimensions = req.body.dimensions
    const name = req.body.name
    const price = req.body.price
    const description = req.body.description
    const tags = req.body.tags

    if(!name || !description || !stock || !price || !dimensions){
        return res.json({
            error : "Necessary details not maintained"
        })
    }   
    if(tags.length() < 3){
        return res.json({
            error : "Insufficient Tags"
        })
    }
    if(price <= 0){
        return res.json({
            error : "Invalid Price"
        })
    }

    const product = new Product({
        stock,
        reviews : [],
        dimensions,
        name,
        description,
        tags,
        price,
        seller : sellerId,
        verified : false
    })
    const seller = await Seller.findById(sellerId)
    seller.products = [...seller.products, product.id]

    product.save()
    seller.save()

    return res.json({
        msg : "Product Added",
        productId : product.id,
        sellerId,
        name
    })
})

router.get("/getProduct",userJWTAuthentication , (req, res) => {
    const pid = req.body.productId
    const product = new Product.findById(pid)
    return product
})

router.post("/editProduct",JWT_seller_authentication ,productExists ,sellerHasProduct, async (req, res) => {
    const pid = req.body.product

    const stock = req.body.stock
    const dimensions = req.body.dimensions
    const name = req.body.name
    const price = req.body.price
    const description = req.body.description
    const tags = req.body.tags

    const product = await Product.findById(pid)

    if(stock){
        product.stock = stock
    }
    if(dimensions){
        product.dimensions = dimensions
    }
    if(name){
        product.name = name
    }
    if(price){
        product.price = price
    }
    if(description){
        product.descripton = description
    }
    if(tags){
        product.tags = tags
    }
    
    product.save()

    return res.json(product)
})

router.get("/getProductByFilter", userJWTAuthentication, (req, res) => {
    const temp_filter = req.body.filter
    const filter = JSON.parse(temp_filter)


})

export default router