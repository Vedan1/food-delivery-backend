import mongoose from "mongoose";
import fs from "fs"
import foodModel from "../models/foodModel.js";
//adding Food
const addFood= async (req,res)  =>{

    let image_fname = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_fname,
        category: req.body.category
    })

    try{
        await food.save()
        res.status(201).json({success:true ,message: 'Food added successfully'})
    }catch(error){
        console.error(error)
        res.status(500).json({success:false ,message: 'Server error'})
    }


}

export {addFood}
