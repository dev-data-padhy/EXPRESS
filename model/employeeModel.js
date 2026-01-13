import mongoose from "mongoose";

const empSchema=mongoose.Schema({
    ename:String,
    epassword:String,
    ephone:String,    
    email:String,
    deleted: {
        type: Boolean,
        default: false,
        select: false
    }
},
{timestamps:true}
);

export default mongoose.model("Employee", empSchema);
