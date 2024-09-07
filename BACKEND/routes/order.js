import { Router } from "express";
import { userJWTAuthentication } from "../middleware/user.js";
import { Order } from "../db/orders.js";
import { Address, User } from "../db/user.js";
import { Product } from "../db/product.js";
import jwt from "jsonwebtoken"

const router = Router()

router.post("/product/:id",userJWTAuthentication ,async (req, res) => {
    const pid = req.params.id
    const addressId = req.body.addressId
    const quantity = req.body.quantity

    const auth = req.headers.authentication
    const token = auth.split(" ")[1]
    const decode = jwt.decode(token)
    const userId = decode.id

    const address = await Address.findById(addressId)
    const product = await Product.findById(pid)
    const temp = await User.findById(userId)
    if(quantity > product.stock){
        return res.json({
            error : "Not Enough Items/Out of Stock"
        })
    }

    const price = Number(quantity)*product.price

    const order = new Order({
        phone : address.phone,
        address,
        price,
        expetedDelivery : "",
        product : [{
            quantity,
            id : pid
        }]
    })

    const user = await User.findByIdAndUpdate(userId, {
        orders : [...temp.orders, order.id]
    })
    await Product.findByIdAndUpdate(pid, {stock : (product.stock - quantity > 0 ? product.stock - quantity : 0)})
    order.save()
})

router.post("/list/:id",userJWTAuthentication , (req, res) => {
    const cid = req.params.id
    const addressId = req.body.addressId
    const quantity = req.body.quantity

    const auth = req.headers.authentication
    const token = auth.split(" ")[1]
    const decode = jwt.decode(token)
    const userId = decode.id()

    const address = new Address.findById(addressId)
    const product = new Product.findById(pid)

    const price = Number(quantity)*product.price

    const order = new Order({
        phone : address.phone,
        address,
        price,
        expetedDelivery : "",
        product : [{
            quantity,
            id : pid
        }]
    })
})

export default router