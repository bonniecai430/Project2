
const Product = require('../models/product')

module.exports={
    new:addNew,
    index,
    create,
    delete:deleteItem,
    show,
    deleteItems
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

  

    function show(req,res){
       Product.findById(req.params.id, function(err, product) {
            res.render('products/show',{
                product
            });
          });
    }

    function deleteItem(req,res){
        Product.findByIdAndDelete(req.params.id, function(err){
            res.redirect('/products')
        })
    
    }

    function deleteItems(req,res){
        Product.deleteMany({},function(err){
            res.redirect('/')
        })
        
    }