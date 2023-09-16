const fs=require("fs")

// //create a new file--------------------->>>>>>>>>>>(over write)

// fs.writeFileSync('read.txt',"welcome sanjeev kushwaha in backend part ");
//  //append data-------------->>>>>>>>>>>>>>{add after}
// fs.appendFileSync('read.txt','how are you sanjeev kushwaha')


// const data=fs.readFileSync('read.txt',"utf-8");
// console.log(data)

//raname the fileName

fs.renameSync('read.txt','readwrite.txt')