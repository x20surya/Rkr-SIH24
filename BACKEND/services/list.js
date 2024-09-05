import { Lists } from "../db/user.js"

export const listAdder = (name, user) => {
    const list = new Lists({
        name,
        user,
        products : []
    })
    list.save()
    return list.id
}

export const listEditor = async (id, pid, action) => {
    const list = await Lists.findById(id)
    if(action.toLowerCase() === "add"){
        list.products = [...list.products, pid]
    }else if(action.toLowerCase() === "delete"){
        
    }
}