const express=require("express")
const cors=require("cors")
const app=express();
const axios = require('axios');

app.use(cors({
    origin:"*",
  }))
const port= 8008;
app.use(express.json());
 
app.get('/numbers', async(req,res)=>{
    let urls=req.query.url;

    if(!Array.isArray(urls)){
        urls=[urls];
    }
    let ans=[]
    for(let url of urls){
        try{
            console.log("1",url)
            let res=await axios.get(url)
            if (res.status >= 200 && res.status <= 299) {
                console.log(res.data.numbers)
                ans=[...ans,...res.data.numbers];
            }

        }catch(error){
            console.log("error")
           
        }
    }

    let setAns=new Set(ans)
    let fans=[...setAns].sort((a1,a2)=>a1-a2)
    res.json({"numbers":fans})
})


app.listen(port,()=>{
    console.log(`app is listening at http://localhost:${port}`)
})