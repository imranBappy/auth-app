const {Schema, model} = require('mongoose');

const gameSchema = new Schema({
    title:{
        type: String,
        require: true,
    },
    rate:{
        type: Number,
        require: true,
    },
    win:{
        type: Boolean,
        default: false
    },
    date: { type: Date, default: Date.now }
})

const game = model('game', gameSchema);
module.exports = game;