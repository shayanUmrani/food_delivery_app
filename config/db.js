import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://shayanumrani:shayanumrani@cluster0.wv7oenv.mongodb.net/foodDeliveryApp?appName=Cluster0',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
       console.log('DB connected') ;
    })
    .catch((err) => console.log(err));
}
