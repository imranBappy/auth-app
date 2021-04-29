const {Schema, model} = require('mongoose');

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
        ref: 'user',
        require: true
    },
    game:{
        type: Schema.Types.ObjectId,
        ref: 'game',
        require: true
    },
})

const Bet = model('Bet', betSchema);

module.exports = Bet;