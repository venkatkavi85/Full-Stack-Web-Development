// const waitTime = 3000;
// console.log(`Setting a ${waitTime/1000} second delay`);
// const timeFinished = () => console.log("done");
// setTimeout(timeFinished, waitTime);

const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () =>{
    currentTime += waitTime;
    const p = Math.floor((currentTime / waitTime) * 10);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(` waiting... ${p}% `);
};

console.log(`Setting a ${waitTime / 1000} second delay`);



const complted = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("Graet !!!");

};

const interval =  setInterval(incTime, waitInterval);
setTimeout(complted , waitTime);


