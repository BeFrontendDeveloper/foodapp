import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://bhavyasri2897:28111997@cluster0.osjjd.mongodb.net/FOODAPP').then(()=>console.log("DB Connected"));
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.