const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'project'
});

connection.connect(function(err){
    if(err){
        console.log('An error has occured: '+ err)
    }
    else{
        console.log('Database connected!')
    }
});

module.exports = connection;