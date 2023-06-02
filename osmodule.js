const os=require('os')
console.log(os.freemem());
console.log(os.homedir());
console.log(os.platform());
console.log(os.hostname());
console.log(os.arch());
console.log(os.cpus());
console.log(Math.round(os.uptime()/3600))
