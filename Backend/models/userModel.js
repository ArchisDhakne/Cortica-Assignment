import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  
 name:{type:String,required:true},
 email:{type:String,unique:true,required:true},
 password:{type:String},
 role:{type:String,enum:['student','teacher','admin'],default:'student'},
 classNo:{type:Number,required:true}
});


const userModel = mongoose.model("User",userSchema);

export default userModel;