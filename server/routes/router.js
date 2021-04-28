const authRoute = require('./authRoute')
const gameRoute = require('./gameRoute')
const routers = [
    {
        path: '/auth',
        router: authRoute
    },
    {
        path:'/game',
        router: gameRoute
    }
]

module.exports = app =>{
    routers.forEach(r=>{
        app.use(r.path, r.router)
    })
}