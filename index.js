const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const axios = require('axios')
var cors = require('cors')
app.use(bodyParser.json());
app.use(cors())
const port = process.env.PORT;
app.listen(port,()=>{
    console.log("escuchando en el puerto 3000")
})

app.get("/info",(req, res)=>{res.send("aqui todo bien")})
app.get("/users",async(req, res)=>{

    const data = await axios.get("https://gorest.co.in/public/v2/users")
    res.send(data.data)

})



