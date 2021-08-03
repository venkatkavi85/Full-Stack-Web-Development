const fs = require("fs");

if (fs.existsSync("Read-Me")){
    console.log("Already Exist");
} else {

    fs.mkdir("Read-Me" , err =>{
        if (err){
            throw err;
        }
 
        console.log("Directory created");
 });
}