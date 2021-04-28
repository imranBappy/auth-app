const router = require('express').Router()
const { 
    signupPostController, 
    singinPostController
 } = require('../controllers/authController');
 
// signup route
router.post('/', signupPostController)

//singin route

router.post('/singin', singinPostController)

module.exports = router

