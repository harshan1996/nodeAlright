const eventEmitter=require("events")

class MyEmitter extends eventEmitter{}

// init object
const myEmitter= new MyEmitter()

// Event Listener
myEmitter.on("event",()=>{
    console.log("event fired");
})

myEmitter.emit("event")
myEmitter.emit("event")
myEmitter.emit("event")