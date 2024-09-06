import { Product } from "../db/product.js"
import { Lists } from "../db/user.js"

export const listAdder = (name, user) => {
    const list = new Lists({
        name,
        user,
        products: []
    })
    list.save()
    return list.id
}

export const listEditor = async (id, pid, action) => {
    const list = await Lists.findById(id)
    if (action.toLowerCase() === "add") {
        const product = await Product.findById(pid)
        if (product) {
            let exists = false
            list.products.map((product) => {
                if (product.id == pid) {
                    product.qty += 1
                    exists = true
                }
            })
            if (!exists) {
                list.products = [...list.products, {
                    qty: 1,
                    id: pid
                }]
            }
        } else {
            throw new Error("Product not found")
        }

    } else if (action.toLowerCase() === "remove") {
        let exists = false
        let qty = -1
        list.products.map((product) => {
            if (product.id == pid) {
                product.qty -= 1
                exists = true
            }
        })
        list.products = list.products.filter((product) => {
            if (product.qty < 1) {
                return false
            } else {
                return true
            }
        })
        if (!exists) {
            throw new Error("Product not found in list")
        }
    } else if(action.toLowerCase() === "delete"){
        let exists = false
        list.products = list.products.filter((product) => {
            if (product.id == pid) {
                exists = true
                return false
            } else {
                return true
            }
        })
        if (!exists) {
            throw new Error("Product not found in list")
        }
    } else{
        throw new Error("Invalid Action in lists updation")
    }
}