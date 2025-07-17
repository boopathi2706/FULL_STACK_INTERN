import mongoose from "mongoose";

const productSchema=mongoose.Schema({
    id:{
        type:Number,
        unique:true,
        required:true
    },
   name:{
    type:String,
    unique:true,
    required:true,
   },
   age:{
    type:Number,
    required:true,
   }
})
export const ProductModel=mongoose.models["product"]||mongoose.model("product",productSchema);