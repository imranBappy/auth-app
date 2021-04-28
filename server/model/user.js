const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name:{
        type: String,
        trim: true,
        maxlength: 40,
        minlength: 2,
        required: true
    },
    username:{
        type: String,
        trim: true,
        maxlength:30,
        minlength: 2,
        required: true
    },
    password:{
        type: String,
        trim: true,
        required: true
    },
    date: { type: Date, default: Date.now }
})

const User = model('user', userSchema);
module.exports = User;