const express=require("express")
const App=express();

const data=(req,res,next)=>{
      
      if(!req.query.age){
     res.send("Please Provide age")
      }else if(req.query.age<=20){
        res.send("You can not access the Page")
      }
      else{

          next();
      }
}
App.use(data);

App.get('/',(req,res)=>{
    res.send("Welcome to Home Page")
});
App.get('/about',(req,res)=>{
    res.send("Welcome to About Page")
});
App.get('/contact',(req,res)=>{
    res.send("Welcome to Contact Page")
});

App.listen(3000,()=>{
    console.log("3000")
});