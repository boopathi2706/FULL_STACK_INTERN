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


export const DELETE = async(_,{params})=>{
   try {

    const id =Number(params.id);
     await connectDB();
    await ProductModel.findByIdDelete({id});
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


export const PATCH = async (_,{params}) => {
    try {
        
        
        const id = Number(params.id);
        
        const data = await req.json();
        await connectDB();

        if (!data.name && !data.age) {
            return Response.json({
                status: "wrong",
                message: "No data provided"
            }, { status: 401 });
        }

        const existing = await ProductModel.find(item=>item.id===id);

        const updatedItem = {
            id,
            name: data.name || existing.name,
            age: data.age || existing.age
        };
        await ProductModel.findByIdAndUpdate({id,updatedItem});

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