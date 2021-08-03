// const firstName = "venkat";
// const secName = "kavi";
const [, , firstName, secName] = process.argv;
console.log(`Your name is ${firstName} ${secName}`);
// console.log(process.pid);