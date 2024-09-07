import mongoose from "mongoose"
import env from "dotenv"
env.config()

const db = mongoose.createConnection(`${process.env.MONGOBD}PRODUCTS`)

const ProductSchema = new mongoose.Schema({
    seller : {
        type : mongoose.Schema.ObjectId,
        ref : 'Seller'
    },
    name : String,
    price : Number,
    verified : Boolean,
    description : String,
    dimensions : String,
    stock : Number,
    tags : [String],
    reviews : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
})

const ReviewSchema = new mongoose.Schema({
    product : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    stars : Number,
    subject : String,
    descripton : String
})

export const Product = db.model("Product", ProductSchema)
export const Review = db.model("Review", ReviewSchema)