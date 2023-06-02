const http=require("http")

http.createServer((req,res)=>{
    res.write("hello everyone")
    res.end()
}).listen(5001,()=>{
    console.log("server running ...");
})