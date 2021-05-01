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

// betSchema.statics = {
//     findGames: function(id){
//         // console.log(id);
//         // console.log(4000);
//         return this.findById(id).select({
//             _id: 0,
//             __v: 0,
//             date: 0,
//         }) 
//     }
// }

const Bet = model('Bet', betSchema);

module.exports = Bet;