// const { } = require("mongoose");
const Bet = require("../model/bet");
// const Game = require("../model/game")
// const User = require("../model/user");
const manageData = require("../utils/manageData");

exports.betPostController = async (req, res, next)=>{
    const {_id, bet} = req.body;
    const newBet = new Bet({
        bet: Number(bet),
        user: req.user._id,
        game: _id
    })
    await newBet.save()
    res.json(manageData('Bet created successfully!', newBet))
}

// bet true hobe 
// ke ke bet korche
// sobar update kora

exports.betPutResultController = async (req,res, next)=>{
    const _id = req.body
    console.log(_id);
}