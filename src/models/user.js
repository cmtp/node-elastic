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
    },
    phones: [{
        type: {
            type: String,
            enum: ['FIJO', 'MOVIL'],
            required: true
        },
        phonenumber: {
            type: Number,
            required: true
        }
    }],
    web: {
        type: String,
        validate: {
            validator: () => {
                return /^[0-9]{7}/.text(v);
            },
            message: '{VALUE} is not a web'
        }
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);