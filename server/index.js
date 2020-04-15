const config = require('./config/config')
const app = require('./config/express')

app.listen(config.port, () =>{
    console.log('server started on port ${config.port} (${config.env})');
    console.log(config.port, config.env);
});