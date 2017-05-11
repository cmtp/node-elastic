import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let AddressSchema = new Schema({
    street: { 
        type: String, required: true 
    },
    number: { 
        type: Number, 
        required: true 
    },
    city: { 
        type: String, 
        required: true 
    },
    country: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: false
    },
    zone: {
        type: String,
        required: true
    },
    localization: {
        latitude: {
            type: Number
        },
        longitude: {
            type: Number
        }
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Address', AddressSchema);