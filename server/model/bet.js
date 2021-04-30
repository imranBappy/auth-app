const {Schema, model} = require('mongoose');
const Game = require('./game');
const User = require('./user');

const betSchema = new Schema({
    bet:{
        type: Number,
        require: true
    },
    isWin:{
        type: Boolean,
        default: false
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: User,
        require: true
    },
    game:{
        type: Schema.Types.ObjectId,
        ref: Game,
        require: true
    },
})

const Bet = model('Bet', betSchema);

module.exports = Bet;