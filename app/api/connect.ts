import mongoose from "mongoose";
mongoose.set('strictQuery', false);

export async function dbConnect() {
    await mongoose.connect("mongodb://127.0.0.1:27017/ServerSide");
    console.log("Connected");
}