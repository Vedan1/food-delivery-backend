import express from "express";
import { addFood} from "../controllers/foodController.js";
import multer from 'multer' //img storage

//image uploaded save storage configuration for upload(variable 14 line) 

const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req,file,cb)=>{
       return cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const upload = multer({storage:storage})

const foodRouter = express.Router()
foodRouter.post("/add",upload.single("image"), addFood)


export default foodRouter

