const Game = require('../model/game');
const manageData = require('../utils/manageData');

exports.gameManyPostConroller = async (req, res, next) =>{
    try {
        const manyGames = await Game.insertMany(req.body)
        res.json(manageData('Data successfully added!', manyGames))
    } catch (error) {
        next()
    }
}

exports.singleGamePostController = async (req, res, next)=>{
    try {
        const newGame = new Game(req.body)
        const game = await newGame.save();
        res.json(manageData('Data Added', game));
    } catch (error) {
        next()
    }
}

exports.gameGetController = async (req, res, next)=>{
    try {
        const games = await Game.find({});
        res.json(manageData('data', games))
    } catch (error) {
        next()
    }
}