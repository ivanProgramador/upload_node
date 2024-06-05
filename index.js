const express = require("express");
const app = express();
const multer = require("multer");

app.set('view engine','ejs');

/*
 No caso o multer vai criar uma pasta
 para guradar os arqruivos que vierem pela rota 
 no caso vai ser a pasta uploads ele recebe um objeto 
 que tem como parametro o dest quue é uma url
 que diz onde ele tme que criar uma pasta  

*/
const upload = multer({dest:'uploads/'});

app.get("/",(req,res)=>{
    res.render("index");
});

app.post("/upload",upload.single('file'),(req,res)=>{
    res.send('Arquivo recebido')

})

app.listen(8080,()=>{
    console.log("Servidor rodando")
})