const fs = require('fs');
const path = require('path');

// Path to data folder
const dataPath = path.join(__dirname, '../data');

// Function to read JSON file
function readData(fileName) {
    const filePath = path.join(dataPath, fileName);

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log(`Data from ${fileName}:`);
        console.log(JSON.parse(data));
    });
}

// Read files
readData('users.json');
readData('products.json');
