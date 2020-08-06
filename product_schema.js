var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
    name:{type: String , required : true},
    detail:{type: String , required : true},
    price:{type: Number , required : true},
    imgurl:{type: String , required : true}

})

var ProductModel = mongoose.model('product',ProductSchema);

module.exports = ProductModel;

