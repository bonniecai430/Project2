const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    item:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        default:1
    },
    sugar:{
        type:String,
        default:100
    },
    ice:{
        type:Number,
        default:100
    },
    topping:{
        type:String
    },
    specialIntruction:String

})

module.exports = mongoose.model('Product', productSchema)