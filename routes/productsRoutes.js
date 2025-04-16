const express =require('express');
const router = express.Router();
const connectEnsureLogin =require('connect-ensure-login')
const multer =require('multer')

//import models
const Product =require('../models/Product')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, "public/img/uploads");
    },
    filename: (req, file, cb) => {
    cb(null, file.originalname);
    },
    });
    var upload = multer({ storage: storage });



router.get('/addProduce',(req,res) =>{
    res.render("products");
});

router.post('/addProduce', upload.single('image'), async (req, res) => {
    try {
        const addProduct = new Product(req.body); // Create a new product instance
        addProduct.image = req.file.path;
        console.log(addProduct);
        
        await addProduct.save(); // Wait for the product to be saved

        res.redirect('/addProduce'); // Redirect after successful save
    } catch (error) {
        console.error(error);
        res.status(400).render("products", { error: "Failed to add product" }); // Provide error feedback
    }
});


// code to get a list of products from the database 
router.get("/productsList", async(req,res) =>{
    try {
        const products = await Product.find().sort({$natural:-1});
        res.render("productslist", {
            products:products
        })
    } catch (error) {
       res.status(400).send("unable to find products in the db") 
    }
  });
router.get('/updateproduce/:id',async(req,res)=>{
    try {
        const updateproduce = await Product.findOne({_id:req.params.id})
        res.render('updateproduce',{product:updateproduce})
    } catch (error) {
        res.status(400).send('unable to update produce')
        
    }

})
router.post('/updateproduce',async(req,res)=>{
   try {
    await Product.findOneAndUpdate({_id:req.query.id})
    res.redirect('/addProduce/productsList')
} catch (error) {
    res.status(400).send('unable to find this  produce')
   } 
})

/*connectEnsureLogin.ensureLoggedIn(), 
restricts that certain actions are only 
supposed to be done when a user is logged in */

router.post('/deleteproduct',  async (req, res) => {
    try {
        await Product.deleteOne({ _id: req.body.id });
        res.redirect('back');
    } catch (error) {
        res.status(400).send('Unable to delete product');
    }
});






module.exports=router;