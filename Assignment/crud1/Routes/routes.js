const express=require("express");
const Router=express.Router();

const {UserModel}=require("../models/userModel")

const data=(req,res,next)=>{
  
    next()
}
Router.use(data)
Router.get("/",async(req,res)=>{
    const title=req.query.title;
    const rating=req.query.rating;
    
    if(title!==undefined){
        const data= await UserModel.find({title:title});
        res.send(data);
    }else if(rating!==undefined){
        const data= await UserModel.find({rating:rating});
        res.send(data);
    }else{
        const data= await UserModel.find();
        res.send(data);
    }
    
})

Router.get("/sort=price",async(req,res)=>{
    const title=req.query.price;
    res.send(title)
    if(title===asc){
        const data= await UserModel.find().sort({price:1});
          res.send(data);
    }else if(title===desc){
        const data= await UserModel.find().sort({price:-1});
        res.send(data);  
    }
    
    // if(title!==undefined){
    //     const data= await UserModel.find({title:title});
    //     res.send(data);
    // }else if(rating!==undefined){
    //     const data= await UserModel.find({rating:rating});
    //     res.send(data);
    // }else{
    //     const data= await UserModel.find();
    //     res.send(data);
    // }
    
})

Router.post("/add",async(req,res)=>{
    const{id,title,rating,year,ticketPrice}=req.body;
    const newData=UserModel({
        id,
        title,
        rating,
        year,
        ticketPrice
    })
   newData.save();
   const data= await UserModel.find();
        res.send(data);
})


Router.put("/put",async(req,res)=>{
   await UserModel.findOneAndUpdate(req.query,req.body);
    const data= await UserModel.find();
        res.send(data);
})

Router.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    await UserModel.deleteOne({id:`${id}`})
    const data= await UserModel.find();
        res.send(data);
})



module.exports={Router}