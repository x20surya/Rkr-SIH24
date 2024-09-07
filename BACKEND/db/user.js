import mongoose, { mongo } from "mongoose"
import env from "dotenv"
env.config()

const db = mongoose.createConnection(`${process.env.MONGOBD}USERS`)

const UserSchema = new mongoose.Schema({
    address : [{
        type : mongoose.Schema.ObjectId,
        ref : "Address"
    }],
    first_name : String,
    last_name : String,
    password : String,
    email : String,
    emailVerified : Boolean,
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

const AddressSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.ObjectId,
        ref  : "User"
    },
    reciever : String,
    flat : String,
    area :String,
    pincode : String,
    city : String,
    phone : Number,
    title : String,
    landmark : String
})

export const User = db.model("User", UserSchema)
export const Lists = db.model("Collection", CollectionSchema)
export const Address = db.model("Address", AddressSchema)

