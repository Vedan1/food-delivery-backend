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

const listFood = async (req,res) => {
    try{
        const foods = await foodModel.find({})
        res.json({success:true, data : foods})
    }catch(error){
        console.log(error)
        res.json({success:false, data : "error"})
    }
}


const removeFood = async (req,res) =>{
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message: 'Food removed successfully'})
    }
    catch(error){
        console.error(error)
        res.status(500).json({success:false, message: 'Server error WHILE rEMOVING'})
    }
}
export {addFood, listFood,removeFood}
