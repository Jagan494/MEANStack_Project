const express = require('express')
const path = require('path')
const config = require('./config')
const bodyparser = require('body-parser')
const logger = require('morgan')
const helmet = require('helmet')
const routes = require('../routes')
const cors = require('cors')

//init the app

const app = express()

//logger 

if(config.env == 'development'){
    app.use(logger('dev'));
}

//get dist folder

const distDir = path.join(__dirname, '../../dist')

//use dist as hosting env
app.use(express.static(distDir));

// use of body parser before Accepting the request
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended : true
}))

//Secure of app
app.use(helmet())
app.use(cors())


app.use('/api/', routes)
//serve index from dist

app.get('*', (req, res) => {
    res.sendFile(path.join(distDir, 'index.html'))
})

module.exports = app

















// //init app

// const app = express()

// //logger

// if(config.env === 'development'){
//     app.use(logger('dev'));
// }

// const distDir = path.join(__dirname,'../../dist');
// // use dist as hosting server

// app.use(express.static(distDir));

// app.use(bodyparser.json())
// app.use(bodyparser.urlencoded({
//     extended : true
// }))


// //secure our app
// app.use(helmet())
// app.use(cors())
// app.use('/api', routes)

// //serve the index.html file
// app.get('*', (req, res) => {
//     res.send(path.join(distDir, 'index.html'))
// })

// module.exports = app;
