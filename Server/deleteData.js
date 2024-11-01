require('dotenv').config({ path: '/Users/henrikravnborg/Desktop/.env' });

const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

// Set up database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true
});

// Connect to the database
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL to reset tables.');

    // Disable foreign key checks
    db.query('SET FOREIGN_KEY_CHECKS = 0;', (err) => {
        if (err) throw err;
        console.log('Foreign key checks disabled.');

        // Truncate all tables
        const truncateTables = `
            TRUNCATE TABLE AssignmentGrades;
            TRUNCATE TABLE Enrollment;
            TRUNCATE TABLE Assignments;
            TRUNCATE TABLE Courses;
            TRUNCATE TABLE StudenterCanvas;
        `;

        db.query(truncateTables, (err) => {
            if (err) throw err;
            console.log('All tables truncated.');

            // Re-enable foreign key checks
            db.query('SET FOREIGN_KEY_CHECKS = 1;', (err) => {
                if (err) throw err;
                console.log('Foreign key checks re-enabled.');
                db.end();
            });
        });
    });
});
