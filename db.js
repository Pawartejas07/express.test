const mongoose=require("mongoose")
const connectDB=()=>{
    mongoose.connect("mongodb://localhost:27017/i1_pro")
   .then(()=>{
    console.log("connected...");
    
   }).catch((error)=>{
    console.log("error");
    
   })
    
}
module.exports={connectDB}

