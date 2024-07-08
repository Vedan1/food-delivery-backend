import mongoose from "mongoose";
import fs from "fs"
import foodModel from "../models/foodModel.js";

//ADDING FOOD API
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


//LISTING ALL FOOD API
const listFood = async (req,res) => {
    try{
        const foods = await foodModel.find({})
        res.json({success:true, data : foods})
    }catch(error){
        console.log(error)
        res.json({success:false, data : "error"})
    }
}


//REMOVING ALL FOOD API
//needs to be worked on 
const removeFood = async (req,res) =>{
    try{
        // console.log(req.body.json())
        const {id} = req.params.id
        const food = await foodModel.findById(req.params.id);
        
        //fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(id)
        res.json({success:true, message: 'Food removed successfully'})
    }
    catch(error){
        console.error(error)
        res.status(500).json({success:false, message: `Server error WHILE rEMOVING ${error}`})
    }
}
export {addFood, listFood,removeFood}
