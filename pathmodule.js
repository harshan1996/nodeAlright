const path=require("path")

let fileLocation="/home/alankrith-harshan/app.js"

const base=path.basename(fileLocation)
console.log(base);

const dirName=path.dirname(fileLocation)
console.log(dirName);

const fileExt=path.extname(fileLocation)

console.log(__filename,fileExt);

console.log(path.basename(__filename))
console.log(path.join(__dirname,"folder","index.js"))