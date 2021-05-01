const Bet = require("../model/bet");
const Game = require("../model/game");
const User = require("../model/user");
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

exports.betPutResultController = async (req,res, next)=>{
    const {gameId} = req.params
    try {
        const findGame = await Game.findGame(gameId);
        const allBets = await Bet.find({game: findGame.gameId})
        if (!findGame.win) {
            for (let i = 0; i < allBets.length; i++) {
                const bet = allBets[i];
                const findUser = await User.findById(bet.user)
                const updateBalance = bet.bet * findGame.rate;
                await User.findByIdAndUpdate(findUser._id, {
                    $set:{
                        balance:findUser.balance + updateBalance
                    }
                });
                await Bet.findByIdAndUpdate(bet._id,{
                    $set:{isWin: true}
                })
            }
            const gameUpdate = await Game.findByIdAndUpdate(gameId,{
                $set:{win: true}
            },{new: true});
            return res.json(manageData('All data updated', gameUpdate))
        };
        next('Allrady bet is win');
    } catch(err) {
        next()
    }
}