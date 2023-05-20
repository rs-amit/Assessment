require('dotenv').config()
const cors = require('cors');
const express = require("express");
const connectDB = require("./config/db")

const userRouter = require("./routes/User")
const product = require('./routes/Product')
const cart = require('./routes/Cart')
const auth = require("./routes/auth")

connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/users",userRouter)
app.use("/api/auth", auth)
app.use("/api/product", product)
app.use("/api/carts", cart)



const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>console.log(`server running on port ${PORT}`)) 