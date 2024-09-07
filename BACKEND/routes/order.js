import { Router } from "express";
import { userJWTAuthentication } from "../middleware/user.js";

const router = Router()

router.post("/product/:id",userJWTAuthentication , (req, res) => {
    const pid = req.params.id
    const address = req.body.address
    
    const auth = req.headers.authentication
    const token = auth.split(" ")[1]
    const decode = jwt.decode(token)
    const userId = decode.id()

})

export default router