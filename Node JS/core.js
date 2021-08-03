const path = require('path');
const util = require("util");
const v8 = require("v8");

util.log(path.basename(__filename));
util.log("^ the name of tht current file");
util.log();



// require('path')
const dirUploads = path.join(__dirname, "www" , "files" , "uploads");
console.log(dirUploads);

util.log(v8.getHeapStatistics());

