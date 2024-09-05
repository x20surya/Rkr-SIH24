import { Lists } from "../db/user"

export const listAdder = (name, user) => {
    const list = new Lists({
        name,
        user,
        products : []
    })
    list.save()
    return list.id
}

export const listEditor = (id) => {

}