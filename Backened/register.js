const mongoose=require('mongoose')
const userInfoSchema=new mongoose.Schema({
    name:String,
    pass:String,
    email:String,
    phone:String
});
const userregis=mongoose.model('registers',userInfoSchema);

module.exports=userregis;