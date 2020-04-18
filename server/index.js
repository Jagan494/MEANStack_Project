const config = require('./config/config')
const app = require('./config/express')

// call db

require('./config/mongoose');
app.listen(config.port, () =>{
    console.log('server started on port ${config.port} (${config.env})');
    console.log(config.port, config.env);
});