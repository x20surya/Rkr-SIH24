import mongoose from "mongoose"
import env from "dotenv"
env.config()

mongoose.connect(`${process.env.MONGOBD}PRODUCTS`)

const ProductSchema = new mongoose.Schema({
    name : String,
    price : String,
    descripton : String,
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

export const Product = mongoose.model("Product", ProductSchema)
export const Review = mongoose.model("Review", ReviewSchema)