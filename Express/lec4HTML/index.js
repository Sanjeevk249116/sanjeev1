const express=require("express");
const path=require("path");
const App=express();

const Path=path.join(__dirname,'files');
console.log(Path)


App.use(express.static(Path));

App.listen(5000);