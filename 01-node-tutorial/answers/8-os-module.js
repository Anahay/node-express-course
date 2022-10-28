const os = require('os')

// info about curret user

const user = os.userInfo()


// metod returns the system uptime in second
console.log(`The System Uptime is ${os.uptime()} seconds`)
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)