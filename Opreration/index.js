const fs=require("fs");

const args=process.argv.splice(2);

const operation=args[0];
const opend=args.splice(1);


switch (operation) {
    case "write":
        fs.writeFile(opend[0],opend[1],(err)=>{
            if(err){
                return console.log("error");
                
            }
            console.log("write done")
        })
        
        break;
        case "read":
        fs.readFile(opend[0],"utf-8",(err,read)=>{
            if(err){
                return console.log("error read");
                
            }
            console.log(read)
        })
        
        break;
        case "append":
            fs.appendFile(opend[0],opend[1],(err)=>{
                if(err){
                    return console.log("error append");
                    
                }
                console.log("append done")
            })
            case "add":
           const data= opend.reduce((el,val)=>el+parseFloat(val),0);
           console.log(data);
           break;
            
         

    default:
      return console.log("Invalid command")
}






