const mongoose = require('mongoose');
const util = require('util');
const debug = require('debug')('express-mongoose-es6-rest-api:index')
const config = require('./config')

const mongoUri = config.mongo.uri;

mongoose.connect(mongoUri, {keepAlive : 1 , useNewUrlParser: true})

const db = mongoose.connection;

db.once('open', ()=>{
    console.log(`connected to server : ${mongoUri}`)
});

db.on('error', () => {
    console.log(`unable to connect database : ${mongoUri}`)
});
if(config.mongo.isDebug){
    mongoose.set('debug', (collectionName, method, query, doc) => {
            debug(`${collectionName},${method}`, util.inspect(query, false, 20), doc);
    })
};
module.exports = db;