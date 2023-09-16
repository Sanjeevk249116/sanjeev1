const express=require("express")
const App=express();
const route=express.Router();
// App.use(data)
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

// for single routes------------------->>>>>>>>>>>>>
// App.get('/',(req,res)=>{
//     res.send("Welcome to Home Page")
// });
// App.get('/about',data,(req,res)=>{
//     res.send("Welcome to About Page")
// });
// App.get('/contact',data,(req,res)=>{
//     res.send("Welcome to Contact Page")
// });



// for multiple routes------------------------->>>>>>>>>>
route.use(data)
App.get('/',(req,res)=>{
    res.send("Welcome to Home Page")
});
route.get('/about',(req,res)=>{
    res.send("Welcome to About Page")
});
route.get('/contact',(req,res)=>{
    res.send("Welcome to Contact Page")
});

App.use('/',route);
App.listen(3000,()=>{
    console.log("3000")
});
