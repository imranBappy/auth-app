const jwt = require('jsonwebtoken');

const isAuthenticated = async (req, res, next) =>{
    const {authorization} = req.headers;
    // console.log(authorization);
    try {
        const token = authorization.split("  ")[1];

        const decoded = await jwt.verify(token, process.env.JTW_SECRETE)

        req.user = {
            _id: decoded._id,
            username: decoded.username 
        }
        next()
    } catch {
        next('There was a server side error')
    }
}

module.exports = isAuthenticated; 