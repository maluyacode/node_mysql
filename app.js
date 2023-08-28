const express = require('express');
const mysql = require('mysql');

const app = express();


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'db_autorentz'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("connection success");
})


app.get('/', (req, res) => {
    sql = "SELECT name, email FROM users";

    db.query(sql, (err, result, fields) => {
        if (err) throw err;
        // console.log(result);
        res.json(result)
    })
})


app.listen(5000, () => {
    console.log("localhost:5000");
})