import express from "express"
import "dotenv/config"
import "./src/db/dbConnection.js"
import cors from "cors"
import productRouter from "./src/routers/productRouters.js"

const port = process.env.PORT || 5001
const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/Product", productRouter)

app.get("/", (req, res) => {
    res.send("Hello World")
})
app.listen(port, (req, res) => {
    console.log(`Server is running on port http://localhost:${port}`)
})