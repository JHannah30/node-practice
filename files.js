const fs = require('fs');  // fs is short for 'file system'

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data)
});


// writing files



// directories



// deleting files