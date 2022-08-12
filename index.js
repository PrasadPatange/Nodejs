const os = require('os');
console.log(os);
console.log(os.arch());
console.log(os.freemem()/(1024*1024*1024)); //free space
console.log(os.totalmem()/(1024*1024*1024)); //total space
console.log(os.hostname()); //DESKTOP-PRASAD
console.log(os.platform()); //win32
console.log(os.userInfo()); //user name and so on...
