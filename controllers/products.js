
const Product = require('../models/product')

module.exports={
    new:addNew,
    index,
    create,
    delete:deleteItem,
    show
}

function addNew(req,res){
    res.render('products/new')
}
 
function index(req,res){
Product.find({},function(err,products){
        res.render('products/index',
        {
            products
    
        })
    })
    }

    function create(req,res){
const product = new Product(req.body)
product.save(function(err){
    if(err)return res.redirect('/products/new');
    console.log(product);
    res.redirect('/products')
})
    }

    function deleteItem(req,res){
        Product.deleteOne(req.params.id)
            res.redirect('/products')
        
    }

    function show(req,res){
       Product.findById(req.params.id, function(err, product) {
          
            res.render('products/show',{
                product
            });
          });
    }