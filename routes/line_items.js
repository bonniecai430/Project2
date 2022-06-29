const express= require('express')
const router=express.Router()
const line_itemsCtrl= require('../controllers/line_items')


router.get('/',line_itemsCtrl.index)


module.exports=router