const fs = require('fs');
const path = require('path');

// Define the new value
const newValue = 'mallorn';

// Read the HTML file
const filePath = path.join(__dirname, 'patentibilitysearch.html');
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Regular expression to find "botlie" within HTML tags
    const regex = /(<[^>]*>)botlie(<\/[^>]*>)/g;

    // Replace "botlie" with the new value within HTML tags
    const modifiedData = data.replace(regex, `$1${newValue}$2`);

    // Write the modified content back to the file
    fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing the file:', err);
            return;
        }
        console.log('File has been updated successfully.');
    });
});