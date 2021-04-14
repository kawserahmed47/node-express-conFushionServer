const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// require('mongoose-currency').loadType(mongoose);
// const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema({
    name: {
        type: String,
        min: 1,
        max: 5,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        default: '',
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    feature: {
        type: Boolean,
        default: false
    },


}, {
    timestamps: true
})


const Promotion = mongoose.model('Promotion', promotionSchema);
module.exports = Promotion;