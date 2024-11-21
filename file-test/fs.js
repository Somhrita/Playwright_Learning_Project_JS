const fs = require("fs")

fs.readFile("user.json","UTF-8",(e,d)=>console.log(d))