const manageData = require('../utils/manageData')
const pageNotFound = (req, res)=>{
    res.status(400).json(manageData('404 Page Not Found!',[], true))
}
module.exports = pageNotFound;