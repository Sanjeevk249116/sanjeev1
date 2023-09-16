const express=require("express");
const path=require("path");

const Path=path.join(__dirname,'files')
console.log(Path)
const App=express();

App.get('',(req,res)=>{
    console.log("data")
    res.sendFile(`${Path}/index.html`)
})
App.get('/about',(req,res)=>{
    console.log("data")
    res.sendFile(`${Path}/about.html`)
})
App.get('*',(req,res)=>{
    console.log("data")
    res.send("not found 404")
})


App.listen(5000);