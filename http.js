const http=require("http")
const fs=require("fs")
const path=require("path")

const server=http.createServer((req,res)=>{
    // console.log(req.url);

    // if (req.url==="/"){
    //     fs.readFile(path.join(__dirname,"HTTP","index.html"),(err,content)=>{
    //         if (err) throw err;
    //         res.writeHead(200,{'Content-Type':"text/html"})
    //         res.write('<h1>This is home page</h1>')
    //         res.write(content)
    //         res.end("<h4>END OF THE FILE</h4>")
    //     })    
    // }

    // if (req.url==="/api"){
    //     const object={
    //         name:"harshan",age:27
    //     }
    //     res.writeHead(200,{'Content-Type':"application/json"})
    //     res.end(JSON.stringify(object)) // If you use write instead of end, the page continues to load
    //     }

    // DO THE SAME IN A DYNAMIC AND SIMPLE WAY
    // Building the file path
    const filePath=path.join(__dirname,"HTTP",req.url==="/"? "index.html":req.url)
    
    console.log(filePath);
    // Getting the file extension
    const fileExt=path.extname(filePath)

    let contentType="text/html"

    // Giving the dynamic Content-Type for the file extensions
    // Content types are very important or else when we go to that page it gives the download option and CSS file doesn't load.
    switch (fileExt){
        case ".js":
            contentType="application/json"
            break
        
        case ".html":
            contentType="text/html"
            break

        case ".css":
            contentType="text/css"
            break
        
        case ".jpg":
            contentType="image/jpg"
            break
    
        case ".png":
            contentType="image/png"
            break
         }
        
    // RESPONSE PART
    // Reading the file
    fs.readFile(filePath,(err,content)=>{
        if (err){
            if (err.code==="ENOENT"){
                fs.readFile(path.join(__dirname,"HTTP","404.html"),(err,content)=>{
                    res.writeHead(200,{"Content-Type":"text/html"})
                    res.end(content,"utf-8")

                })}
            else{
               res.writeHead(500)
               res.end(`Server status code ${err.code}`)
                
            }
            
            }
        
        else {
            res.writeHead(200,{"Content-Type":contentType})
            res.end(content,"utf-8")
        }
    }
    )})

const PORT=process.env.PORT || 5001
server.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})