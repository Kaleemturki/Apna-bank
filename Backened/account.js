const mongoose=require('mongoose')
const CounterSchema = new mongoose.Schema({
    id: { type: String, required: true },
    seq: { type: Number, default: 100 } // Starts at 100 so the first is 101
});
const Counter = mongoose.model('counter', CounterSchema);



const AccountInfo=new  mongoose.Schema({
    acno:String,
    name:String,
    pin:String,
    fname:String,
    phone:String,
    email:String,
    gender:String,
    city:String,
    state:String,
    country:String,
    amount:String,
},{collection:'acounts'});



const account = mongoose.model('accounts', AccountInfo);
module.exports = account;
