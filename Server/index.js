const express = require('express');
const { exec } = require('child_process');
const app = express();
const PORT = process.env.PORT || 5001;

// Load data on server startup
exec('node loadData.js', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error loading data: ${error}`);
        return;
    }
    console.log(stdout);
});

app.get('/', (req, res) => {
    res.send('Server is running with sample data.');
});
const cleanup = () => {
    console.log("hello from cleanup function")
    exec('node deleteData.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error deleting data: ${error}`);
            process.exit(1);
        }
        console.log(stdout);
        process.exit();
    });
};

// Catch shutdown signals and run cleanup
process.on('SIGINT', cleanup);  // Handle Ctrl+C
process.on('SIGTERM', cleanup); // Handle system termination

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
