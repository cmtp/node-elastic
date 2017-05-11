import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let WorkSchema = new Schema({
    type: { 
        type: String, 
        required: true 
    },
    specialty: { 
        type: String, 
        required: true 
    },
    validated: { 
        type: Boolean, 
        default: false 
    },
    dohomework: {
        type: Boolean,
        default: false
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Work', WorkSchema);