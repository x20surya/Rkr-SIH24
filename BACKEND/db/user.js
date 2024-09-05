import mongoose from "mongoose"
import env from "dotenv"
env.config()

mongoose.connect(`${process.env.MONGOBD}USERS`)

const UserSchema = new mongoose.Schema({
    first_name : String,
    last_name : String,
    password : String,
    email : String,
    emailVerified : Boolean,
    address : [String],
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
    name : String,
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    products : [{
        qty : Number,
        id : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }]
})

export const User = mongoose.model("User", UserSchema)
export const Lists = mongoose.model("Collection", CollectionSchema)

