const authRoute = require('./authRoute')
const gameRoute = require('./gameRoute')
const betRoute = require('./betRoute')

const routers = [
    {
        path: '/auth',
        router: authRoute
    },
    {
        path:'/game',
        router: gameRoute
    },
    {
        path:'/bet',
        router: betRoute
    }
]

module.exports = app =>{
    routers.forEach(r=>{
        app.use(r.path, r.router)
    })
}