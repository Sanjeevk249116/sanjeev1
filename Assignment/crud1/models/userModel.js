const mongoose=require("mongoose");

const findMovies=mongoose.Schema({
    id:{type:Number,required:true},
    title:{type:String,required:true},
    rating:{type:Number,required:true},
    year:{type:Number,required:true},
    ticketPrice:{type:Number,required:true},
})

const UserModel=mongoose.model("movies",findMovies);

module.exports={UserModel};