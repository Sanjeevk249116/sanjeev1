
const fs=require("fs");
const boiData={
    name:"sanjeev",
    age:21,
    id:1,
    country:"India"
}

const data=JSON.stringify(boiData)
fs.writeFile("db.json",data,(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("done")
})


fs.readFile("db.json",'utf-8',(err,data)=>{
    if(err){
        console.log(err)
        return;
    }
    const data1=JSON.parse(data)
    console.log(data1)
})

