const { Schema, model } = require('mongoose');

const StockSchema = new Schema({
    symbol: {
        type: String,
        required: false,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    description: {
        type: String
    },
    nickname: {
        type: String
    }
},
{
    timestamps: true
});

const Property = model('Stock', StockSchema);

module.exports = Property;
