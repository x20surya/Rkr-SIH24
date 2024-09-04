import mongoose from "mongoose"
import env from "dotenv"
env.config()

mongoose.connect(`${process.env.MONGOBD}USERS`)

const UserSchema = new mongoose.Schema({
    first_name : String,
    surname : String,
    password : String,
    email : String,
    email_varified : Boolean,
    wishlist : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Collection'
    },
    collections : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Collection'
    }],
    cart : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Collection'
    },
    orders : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }]
})

const CollectionSchema = new mongoose.Schema({
    products : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

export const User = mongoose.model("User", UserSchema)
export const Collection = mongoose.model("Collections", CollectionSchema)

