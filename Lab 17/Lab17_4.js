
// const { exec } = require('child_process');

// // Counts the number of directory in
// // current working directory
// exec('dir', (error, stdout, stderr) => {
//     if (error) {
//         console.error(`exec error: ${error}`);
//         return;
//     }
//     console.log(`stdout: No. of directories = ${stdout}`);
//     if (stderr != "")
//         console.error(`stderr: ${stderr}`);
// });



const child_process = require('child_process');

child_process.exec('dir', (err, stdout, stdin) => {
    console.log(stdout);
})

