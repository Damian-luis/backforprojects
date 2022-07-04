const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const axios = require('axios')
var cors = require('cors')
app.use(bodyParser.json());
app.use(cors())
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("escuchando en el puerto 3000")
})




app.get("/info",(req, res)=>{res.send("aqui todo bien")})
app.get("/users",async(req, res)=>{
    const data = await axios.get("https://gorest.co.in/public/v2/users")
    
    res.send(data.data)

})
app.get("/users/status/:status",async(req, res)=>{
    
    const status=req.params.status;
   
    const data = await axios.get("https://gorest.co.in/public/v2/users").then(e=>{ return e.data})
    const result=data.filter(e=>{return e.status==status})

    res.send(result)
})

app.get("/users/gender/:gender",async(req, res)=>{
    
    const gender=req.params.gender;
    
        const data = await axios.get("https://gorest.co.in/public/v2/users").then(e=>{ return e.data})
    const result=data.filter(e=>{return e.gender==gender})

    res.send(result)
    
    
})

