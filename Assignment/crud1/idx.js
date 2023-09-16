const express=require("express")
const{connection}=require("./index")
const app=express();
const {Router}=require("./Routes/routes")

app.use(Router)
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("done Api connection")
})

app.use("/movies",Router)

app.listen(3000,async()=>{
   try{
    await connection
    console.log("connects")
   }catch(err){ 
     console.log("not connect")
   }
   console.log("3000 data base link")
})