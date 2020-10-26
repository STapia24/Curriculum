const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'BeccaTilts24*',
    databes: 'personal_info'
})

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected!')
})

const server = express();

server.listen('8081', () => {
    console.log('Server started')
})