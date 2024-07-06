import express from "express"
import cors from "cors"

//App Configuration 

const app = express()
const port = 4000

//middleware 
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{res.send("TAAADAAAA")})

app.listen(port,()=>{console.log(`server Started on http://localhost:${port}`)})