import mongoose from "mongoose"
import env from "dotenv"
env.config()

const db = mongoose.createConnection(`${process.env.MONGOBD}ORDERS`)

const OrderSchema = new mongoose.Schema({
    address : {
        type : mongoose.Schema.ObjectId,
        ref : "Address"
    },
    phone : Number,
    name : String,
    price : String,
    expetedDelivery : String,
    product : [{
        quantity : Number,
        id : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }],
})

export const Order = db.model("Orders", OrderSchema)
