const readline = require("readline");

let rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("What is your wife name : " , answer =>{
    console.log(`Your cute wife is -> ${answer}`);
});