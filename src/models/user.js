import mongoose from "mongoose";

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: { 
        type: String,
        required: true
    },
    lastname: { 
        type: String, 
        required: true
    },
    ci: {
        type: Number,
        validate: {
          validator: (v) => {
            return /^[0-9]{7}/.test(v);
          },
          message: '{VALUE} is not a ci'
        }, 
        required: true
    },
    type: {
        type: String, 
        enum: ['worker', 'guest'], 
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);