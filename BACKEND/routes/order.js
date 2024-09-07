import { Router } from "express";
import { userJWTAuthentication } from "../middleware/user.js";
import { Order } from "../db/orders.js";
import { Address } from "../db/user.js";
import { Product } from "../db/product.js";

const router = Router()

router.post("/product/:id",userJWTAuthentication , (req, res) => {
    const pid = req.params.id
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