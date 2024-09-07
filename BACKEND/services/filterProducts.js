import { Product } from "../db/product.js"

export const filterProduct = async (filter) => {

    /*
     filter:{
        seller : String,
        tags : [],
        region : String,
        ratings : Number (-> above Rating)
     } 
     */

    let product = await Product.find()
    if(filter.seller){
        
        product = product.filter((p) => {
            console.log(p)
            console.log(p.seller.toString() === filter.seller)
            return (p.seller.toString() === filter.seller)
        })
        console.log(product)
    }
    if(filter.tags){
        product = product.filter((p) => {
            let fin = false
            filter.tags.map((tag) => {
                if(p.tags.includes(tag)){
                    fin = true
                }
            })
            return fin
        })
    }
    if(filter.region){
        product = product.filter((p) => {
            return (p.region == filter.region)
        })
    }
    if(filter.ratings){
        product.filter((p) => {
            return(p.rating >= filter.rating)
        })
    }

    return product
}