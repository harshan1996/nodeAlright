const Logger=require("./logger.js")

// Object instantiated
const logger=new Logger()

logger.on("message",(data)=>{
    console.log("Called Listener", data);
})

logger.log("hello world")
logger.log("node looks great")

