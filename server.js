import express from "express"
import cors from "cors"
import { DBConnect } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

//App Configuration 

const app = express()
const port = 4000


//DB Connectivity
DBConnect();


//api endpoints
app.use('/api/food', foodRouter)
app.use('/images', express.static("uploads"))

//middleware 
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{res.send("TAAADAAAA")})

app.listen(port,()=>{console.log(`server Started on http://localhost:${port}`)})


