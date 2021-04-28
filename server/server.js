const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routers = require('./routes/router');
const middleware = require('./middlewares/middleware');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const {PORT} = process.env

//middleware
app.use(express.json())
app.use(cors());

// routes
routers(app)

// error middleware
middleware(app);


const url = `mongodb://localhost:27017/authApp`
const port = PORT || 4000;
mongoose.connect(url,
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    ()=>{
    app.listen(port,()=>{
        console.log(`http://localhost:${port}`);
    })
})