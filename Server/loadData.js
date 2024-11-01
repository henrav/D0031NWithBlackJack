require('dotenv').config({ path: '/Users/henrikravnborg/Desktop/.env' });

const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

// Set up database connection with multipleStatements enabled
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true  // Enable multiple SQL statements in one query
});

// Read SQL file
const loadSQL = fs.readFileSync(path.join(__dirname, 'SQL', 'SampleData.sql'), 'utf8');

// Connect to the database and run the SQL
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL to load data.');

    db.query(loadSQL, (err) => {
        if (err) throw err;
        console.log('Data loaded successfully.');
        db.end();
    });
});
