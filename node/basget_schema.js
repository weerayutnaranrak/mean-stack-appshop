var mongoose = require('mongoose');

var BasgetSchema = mongoose.Schema({
    date:{type: Date , required : true},
    product:{type: Array , required : true},
    total:{type: Number , required : true},
});
var BasgetModel = mongoose.model('basget',BasgetSchema);
module.exports = BasgetModel;