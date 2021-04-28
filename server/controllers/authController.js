const User = require('../model/user');
const managedata = require('../utils/manageData');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.signupPostController = async (req, res, next)=>{
    const {name, username, password} = req.body;
    try {
        const isUser = await User.findOne({username});
        if (!isUser) {
            const hash = await bcrypt.hash(password, 10);
            
            const newUser = new User({
            name,
            username,
            password: hash
        })
            await newUser.save();
            res.status(200).json(managedata('Account crate has been successfully!'))
        }else{
            next('Authentication Failed!')
        }
    } catch(err){
        next('There was a server side error')
    }
}

exports.singinPostController = async (req, res, next)=>{
    const {username, password} = req.body;
    try {
        const isUser = await User.findOne({username});
        if (isUser) {
            const isValidPassword = bcrypt.compare(password, isUser.password)
            if (isValidPassword) {
                const token = jwt.sign(
                    {_id:isUser._id, username},
                    process.env.JTW_SECRETE,
                    {expiresIn: '1h'}
                    )
                    res.status(200).json(managedata('Singin successfully!', `Bearer  ${token}`))
            }else{
                next('Authentication Failed!')
            }
        }else{
            next('Authentication Failed!')
        }
    } catch {
        next('There was a server side error')
    }
}