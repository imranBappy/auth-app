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

gameSchema.statics = {
    findGame: function(id){
        return this.findById(id).select({
            __v:0,
            title: 0,
            date:0
        })
    }
}

const Game = model('game', gameSchema);
module.exports = Game;