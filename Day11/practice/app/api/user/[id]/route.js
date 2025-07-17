import { connectDB } from "@/lib/db";
import { products } from "@/lib/product.js";
import { ProductModel } from "@/models/productModel";

export const GET = async (_,{params}) => {
  try {
    
     const id =Number(params.id);
     await connectDB();
     const data = await ProductModel.findOne({id});
    if(!data){
        return Response.json({
        status:"wrong request",
        message:"please check your id "
     },{status:401})
    }
     return Response.json({
        status:"success",
        data:{
            data,
        }
     },{status:201})
  } catch (err) {
    return Response.json({
      status: "Fail",
      message: err,
    }, { status: 500 });
  }
};


export const DELETE = async(req,context)=>{
   try {
    const id =Number(context.params.id);
     await connectDB();
     const data = await ProductModel.findOne({id});
    if(!data){
        return Response.json({
            status:"wrong",
            message:"data not found"
        },{status:401})
    }
    ProductModel.deleteOne({id});
    return Response.json({
        status:"success",
        data:{
            products,
        }
    })

   } catch (error) {
         return Response.json({
            status:"error",
            message:error,
        },{status:501})
   }
}


export const PATCH = async (req, { params }) => {
    try {
        const data = await req.json();
        const id = Number(params.id);

        if (!data.name && !data.age) {
            return Response.json({
                status: "wrong",
                message: "No data provided"
            }, { status: 401 });
        }

        const index = products.findIndex(item => item.id === id);
        if (index === -1) {
            return Response.json({
                status: "wrong",
                message: "Data not found"
            }, { status: 404 });
        }

        const existing = products[index];

        const updatedItem = {
            id,
            name: data.name || existing.name,
            age: data.age || existing.age
        };
        products.splice(index, 1, updatedItem);

        return Response.json({
            status: "success",
            data: {
                products
            }
        }, { status: 200 });

    } catch (error) {
        return Response.json({
            status: "error",
            message: error.message || "Something went wrong"
        }, { status: 500 });
    }
}