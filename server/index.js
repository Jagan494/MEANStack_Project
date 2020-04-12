const express = require('express');
const port = process.env.port || 4265;
const path = require('path'); 
const app = express();

const destDir = path.join(__dirname,'../dist');


//hosting from dist folder
app.use(express.static(destDir)); 
console.log('hosting from ${destDir}');


//serving index.html from dist
app.get('*', (req, res) => {
    res.sendFile(path.join(destDir,'index.html'));
})
console.log('serving index.html from',destDir);

app.listen(port, () => {
    console.log('Server is running in port',port);
})


