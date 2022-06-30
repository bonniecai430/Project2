const express= require('express')
const router=express.Router()
const productsCtrl= require('../controllers/products')

//All actual paths start with "/products"
router.get('/new',productsCtrl.new)
router.get('/',productsCtrl.index)
router.get('/checkout',productsCtrl.deleteItems)
router.post('/',productsCtrl.create)
router.get('/:id',productsCtrl.show)
router.delete('/:id',productsCtrl.delete)

module.exports=router