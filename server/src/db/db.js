import mongoose from "mongoose";




function connectDB(){
try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
    
} catch (error) {
    console.error("Error connecting to DB:", error);
}
}

export default connectDB;