// Node.js program to demonstrate the
// fs.readdir() method

// Import the filesystem module
const fs = require('fs');

// Function to get current filenames
// in directory
fs.readdir(__dirname, (err, files) => {
if (err)
	console.log(err);
else {
	console.log("\nCurrent directory filenames:");
	files.forEach(file => {
	console.log(file);
	})
}
})

// Function to get current filenames
// in directory with "withFileTypes"
// set to "true"

fs.readdir(__dirname,
{ withFileTypes: true },
(err, files) => {
console.log("\nCurrent directory files:");
if (err)
	console.log(err);
else {
	files.forEach(file => {
	console.log(file);
	})
}
})








index.js

// Node.js program to demonstrate
// the fs.readFile() method

// Include fs module
const fs = require('fs');

// Use fs.readFile() method to read the file
fs.readFile('Demo.txt', 'utf8', function (err, data) {
    // Display the file content
    console.log(data);
});

console.log('readFile called');








// Node.js program to demonstrate the
// fs.mkdir() Method

// Include fs and path module
const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'test'),
	(err) => {
		if (err) {
			return console.error(err);
		}
		console.log('Directory created successfully!');
	});
