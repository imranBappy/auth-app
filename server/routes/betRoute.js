const { betPostController } = require('../controllers/betController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = require('express').Router();


router.post('/add',isAuthenticated, betPostController)
router.put('/result', betPostController)


module.exports = router