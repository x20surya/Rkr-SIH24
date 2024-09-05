import UserRoutes from "./routes/user.js";
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

app.listen(process.env.PORT_NUMBER,()=>{
    console.log("Port Running on ", process.env.PORT_NUMBER)
})
