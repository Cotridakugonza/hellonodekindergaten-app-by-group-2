
const mongoose =require('mongoose');
const saleSchema =new mongoose.Schema({
    salesagentname:{
        type:String,
        trim:true
       
    },
    buyersname:{
        type:String,
        trim:true
       
    },
    itembought:{
        type:String,
        trim:true,
        
    },
    dealersname:{
        type:String,
        trim:true
    },
    unitcost:{
        type:String,
        trim:true
    },
    quantity:{
        type:String,
        trim:true
    },
    amountpaid:{
        type:Number,
        trim:true
    },
    quantity:{
        type:Number,
        trim:true
    },
    total:{
        type:Number,
        trim:true
    },
    balance:{
        type:Number,
        trim:true
    },
    dateofrestock:{
        type:Date,
        trim:true,
      
    }  
});
module.exports = mongoose.model('Sale', saleSchema);
