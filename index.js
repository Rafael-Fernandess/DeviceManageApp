require('./config/connection');

const express = require('express');
const port = (process.env.port || 4002);
const app = express();

//config
app.set('port', port);

//routes
app.use('/api', require('./routes'))

//express start
app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('Server error: '+ error)
    }
    else{
        console.log('Server connected on port '+ port)
    }
});