import { Router } from "express";
import { JWT_seller_authentication } from "../middleware/seller.js";
import { Product } from "../db/product.js";
import { Seller } from "../db/seller.js";
import jwt from "jsonwebtoken"

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
        msg : "Product Added"
    })
})

router.get("/getProduct", (req, res) => {
    const pid = req.body.productId
    const product = new Product.findById(pid)
    return product
})

router.get("/getProductByFilter", (req, res) => {
    const temp_filter = req.body.filter
    const filter = JSON.parse(temp_filter)


})

export default router