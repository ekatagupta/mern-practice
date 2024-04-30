const mongoose = require("mongoose");
const { stringify } = require("qs");

const productSchema = mongoose.Schema({
    title: {
        type: String,

        unique: true,
        required: true

    },


    price: {
        type: Number,
        required: true,

    },
    description: String,
    images: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updateAt: {
        type: Date,
        default: new Date()
    }
})

const productModel = mongoose.model('Products', productSchema);
module.exports = productModel;

const testProduct = new productModel({
    title: 'Titan Watch',
    price: 1000,
});

// testProduct.save(),then((res)=>{
//     console.log(res);
// })