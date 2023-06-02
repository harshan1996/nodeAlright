const fs=require("fs")

// NOTE: Not keeping the encoding format as well as toString() will result in hexadecimal values.
fs.readFile("notes.txt","utf-8",(error,result)=>{
    console.log(error,"\n",result);
})

// This is executed first because of single thread non-blocking I/O
console.log("Finished reading the file");

const syncRead=fs.readFileSync("notes.txt")
console.log(syncRead.toString());

const write=fs.writeFile("writeToFile.txt","Some random information",()=>{
    console.log("done writing to the file");
})

console.log("Finished reading the syncRead file");

// creating a folder
fs.mkdir("createFolder",{},(err)=>{
    if (err) throw err
    console.log("folder created");
})