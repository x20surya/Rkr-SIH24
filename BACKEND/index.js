import UserRoutes from "./routes/user.js";
import SellerRoutes from "./routes/seller.js"
import ProductRoutes from "./routes/product.js"
import OrderRoutes from "./routes/order.js"
import express from "express"
import cors from "cors"
import env from "dotenv"
env.config()

const app = express()

app.use(express.json())

app.use(cors({
    origin : "*"
}))

app.use("/user", UserRoutes)
app.use("/seller", SellerRoutes)
app.use("/product", ProductRoutes)
app.use("/order", OrderRoutes)

app.listen(process.env.PORT_NUMBER,()=>{
    console.log("Port Running on ", process.env.PORT_NUMBER)
})
