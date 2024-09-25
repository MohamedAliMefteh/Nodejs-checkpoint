const fs = require('fs');


fs.writeFileSync('welcome.txt', 'Hello Node', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File "welcome.txt" created successfully.');
    }
});


const data = fs.readFileSync('welcome.txt', 'utf8');
console.log('File content:', data);
