const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const axios = require('axios')
const mysql = require('mysql2');
var cors = require('cors');
const { applyPatches } = require('immer');
app.use(bodyParser.json());
app.use(cors())
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("escuchando en el puerto 3000")
})

//conexion a db
var connection = mysql.createConnection({
    host     : 'mysql-damianduran.alwaysdata.net',
    user     : '274005',
    password : 'SilentHill2',
    database : 'damianduran_proyect_users'
  });
   
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });



app.post('/new-users', (req, res)=>{

    const query="INSERT INTO users SET ?";
    const obj={
        mail : req.body.mail,
        gender:req.body.gender,
        name : req.body.name,
        status : req.body.status

    };
    connection.query(obj, query,(error, result) => {
        if (error) {throw error;}
        else (res.status(200).send("user posted succesfully"))
    })

})


/*app.get("/all",(req, res) => {
    const query = "SELECT * FROM users";
    connection.query(query,((error,result)=>{
        if (error) { throw error }
        if (result.length){
            res.send(result);
        }
        else { res.status(500).send("no se ha podido establecer la conexion a la base de datos")}
    }))
})
*/

app.get("/info", (req, res)=>{
    res.send("funcionando")
})