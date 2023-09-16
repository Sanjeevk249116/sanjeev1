const fs=require("fs")

//create a file------------------------->>>>>>>>>>>>>>>

// fs.writeFile('bio.txt',"hello brother!",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })


//append new line------------------------->>>>>>>>>>>>>>>>>>>

// fs.appendFile("bio.txt"," hello sir how are you.",(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("append")
// })

//rename file--------------------->>>>>>>>>>>>>

// fs.rename('bio.txt','mybio.txt',(err)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log('rename')
// })


//readFile--------------------------->>>>>>>>>>>>>>>>>>>

fs.readFile('mybio.txt','utf-8',(err,data)=>{
if(err){
    console.log(err)
    return;
}
console.log(data)
})