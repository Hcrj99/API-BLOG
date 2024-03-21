const mongoose = require("mongoose");//import dependeces 


//conect
const conection = async() => {

    try {

        await mongoose.connect("mongodb://localhost:27017/My_Blog");

        //parameters in case of error
        // *useNewUrlParser: true
        // *useUnifiedTopology: true
        // *useCreateIndex: true

        console.log("Conected with database");

    }
    catch(error){
        console.log(error);
        throw new Error("Conect database failed");
    }

};

//export module
module.exports = {
    conection
}