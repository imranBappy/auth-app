const { betPostController , betPutResultController} = require('../controllers/betController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = require('express').Router();
const User = require('./user');
//  /bet

router.post('/add',isAuthenticated, betPostController)
router.put('/result/:gameId', betPutResultController)


module.exports = router