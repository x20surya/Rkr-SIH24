import mongoose from "mongoose"
import env from "dotenv"
env.config()

mongoose.connect(`${process.env.MONGOBD}SELLERS`)

const SellerSchema = new mongoose.Schema({
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    description : String,
    location : {
        latitude : String,
        longitude : String
    },
    products : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

export const Seller = mongoose.model("Seller", SellerSchema)