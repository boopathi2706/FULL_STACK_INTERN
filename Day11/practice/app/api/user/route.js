import { connectDB } from "@/lib/db.js";
import { ProductModel } from "@/models/productModel";

export const GET = async (req) => {
  try {
    await connectDB();
    const data= await ProductModel.find();
    return Response.json({
      status: "success",
      data: {
        data,
      },
    });
  } catch (err) {
    return Response.json({
      status: "Fail",
      message: err,
    }, { status: 500 });
  }
};



export const POST = async (req) => {
  try {
    await connectDB();

    const data = await req.json();
    const { name, age } = data;

    if (!name || !age) {
      return Response.json({
        status: "fail",
        message: "Required fields missing",
      }, { status: 400 });
    }

    const existingProduct = await ProductModel.findOne({ name });
     const count=await ProductModel.countDocuments()
    if (existingProduct) {
      return Response.json({
        status: "fail",
        message: "Product with this name already exists",
      }, { status: 409 });
    }
     const newData={
        id:count+1,
        ...data,
       }
    const newProduct = await ProductModel.create(newData);
   
    return Response.json({
      status: "success",
      data: newProduct,
    }, { status: 201 });

  } catch (err) {
    return Response.json({
      status: "error",
      message: err.message || "Error occurred in POST query",
    }, { status: 500 });
  }
};