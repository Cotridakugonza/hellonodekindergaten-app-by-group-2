const mongoose =require('mongoose');
const productSchema =new mongoose.Schema({
    producename:{
        type:String,
        trim:true
       
    },
    image:{
        type:String,
    },
    stockavailable:{
        type:Number,
        trim:true
       
    },
    restock:{
        type:Number,
        trim:true,
        
    },
    dealersname:{
        type:String,
        trim:true
    },
    dateofrestock:{
        type:Date,
        trim:true,
      
    }  
});
module.exports = mongoose.model('Product', productSchema);
