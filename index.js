const express = require("express");
const app = express();
const multer = require("multer");

app.set('view engine','ejs');


/*
 A variavel storage recebe um instancia do multer 
 essa instancia chama a função de configuração de armazenamento 
 a primeira coisa que eu configuro eo local de salvamento
 para fazer isso eu peho a requisição , o arquivo e aciono
  uma função de call back cb() ela vai receber o valor nulo 
  e depois o link do local de salvamento 
  
  a segunda função vai ficar no file name que trata a nomeação
  do arquivo essa recebe a mesma coisa so que na rota de executar ela 
  a cb recebe nulo no primeiro parametro e no segundo ela
  avisa aoa multer que arquivo cvai ficar com o nome original
  quando fpor salvo 

  Resolvendo o porbelma de nomeação
*/

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"uploads/");
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
})

/*
 No caso o multer vai criar uma pasta
 para guradar os arqruivos que vierem pela rota 
 no caso vai ser a pasta uploads ele recebe um objeto 
 que tem como parametro o dest quue é uma url
 que diz onde ele tme que criar uma pasta  

*/
const upload = multer({storage});

app.get("/",(req,res)=>{
    res.render("index");
});

app.post("/upload",upload.single('file'),(req,res)=>{
    res.send('Arquivo recebido')

})

app.listen(8080,()=>{
    console.log("Servidor rodando")
})