const { fruits, vegetables } = require('./fruits');

console.log(fruits, vegetables);

const os = require('os');  // os is already built into node

console.log(os.platform(), os.homedir());