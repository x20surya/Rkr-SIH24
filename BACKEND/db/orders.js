import mongoose from "mongoose"
import env from "dotenv"
env.config()

mongoose.connect(`${process.env.MONGOBD}ORDERS`)

const OrderSchema = new mongoose.Schema({
    name : String,
    price : String,
    product : [{
        quantity : Int16Array,
        id : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }],
})

export const Order = mongoose.model("Orders", OrderSchema)