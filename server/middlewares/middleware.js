const error = require('./error')
const pageNotFound = require('./notFound');

const middleArr = [
        pageNotFound,
        error
    ]
module.exports = app =>{
   middleArr.forEach(m=>{
       app.use(m)
   })
}