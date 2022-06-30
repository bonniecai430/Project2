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
        default:'100%'
    },
    ice:{
        type:String,
        default:'100%'
    },
    topping:{
        type:String
    },
    specialIntruction:{
        type:String,
        default:'N/A'
    }

})

module.exports = mongoose.model('Product', productSchema)