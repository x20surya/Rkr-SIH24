import mongoose from "mongoose"
import env from "dotenv"
env.config()

const db = mongoose.createConnection(`${process.env.MONGOBD}SELLERS`)

const SellerSchema = new mongoose.Schema({
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    sellerName : String,
    region : String,
    description : String,
    address : {
        type : mongoose.Schema.ObjectId,
        ref : "Address"
    },
    verified : Boolean,
    products : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

export const Seller = db.model("Seller", SellerSchema)