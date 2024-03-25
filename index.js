const { conection } = require("./Database/conection");//conection with database
const express = require("express");
const cors = require("cors");

//Start App
console.log("Start App");


//conect with database
conection();


//server
const app = express();
const port = 3900;

//configure cors                                                                                                      
app.use(cors());//middle were run after other things or rutes


//convert body to object js
app.use(express.json());//convert all in object js --receive data in content type app/json
app.use(express.urlencoded({extended:true}));//form---urlencode 


//create rutes
const rutesArticle = require("./Rutes/article");


//set rutes
app.use("/api/", rutesArticle);


//create server
app.listen(port, () => {
    console.log("server run in port" + "" + port);
});//port to listen



