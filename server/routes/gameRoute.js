const router = require('express').Router()
const { 
    gameGetController,
    gameManyPostConroller,
    singleGamePostController
} = require('../controllers/gameController');
const isAuthenticated = require('../middlewares/isAuthenticated');


// post controller
router.post('/add-many',gameManyPostConroller )
router.post('/add', singleGamePostController )

// post controller

router.get('/', isAuthenticated, gameGetController)

module.exports = router;