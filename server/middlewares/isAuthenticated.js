const jwt = require('jsonwebtoken');

const isAuthenticated = async (req, res, next) =>{
    const {authorization} = req.headers;
    
    try {
        const token = JSON.parse(authorization).split("  ")[1];
        const decoded = await jwt.verify(token, process.env.JTW_SECRETE)
        req.user = {
            _id: decoded._id,
            username: decoded.username 
        }
        next()
    } catch(err) {
        next('There was a server side error')
    }
}

module.exports = isAuthenticated; 