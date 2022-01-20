const os = require('os')

const user = os.userInfo();

console.log(user);

const uptime = os.uptime();
console.log(`The uptime for this computer is ${os.uptime}`);


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)

const path = require('path')

console.log(path.sep)

const filepath = path.join('/content','subfolder','test.txt');
console.log(filepath);

const base = path.basename(filepath)
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');

console.log(absolute)