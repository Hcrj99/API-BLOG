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
app.use(express.json());//convert all in object js


//create rutes
app.get("/test", (req, res) => {

    console.log("start end point test");


    return res.status(200).json([
        {
            curse: "react",
            name: "camilo",
            url: "camiloDEV.com"
        },
        {
            curse: "react",
            name: "camilo",
            url: "camiloDEV.com"
        }
    ])

});//rute for get -navegator


//create server
app.listen(port, () => {
    console.log("server run in port" + "" + port);
});//port to listen



