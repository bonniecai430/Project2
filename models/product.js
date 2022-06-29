const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    price: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    }
})

module, exports = mongoose.model('Product', productSchema)