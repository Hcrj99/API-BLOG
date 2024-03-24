const { Schema, model } = require("mongoose");

const ArticleSchema = Schema({
    title: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    image: {
        type: String,
        default: "default.png"
    }
});

//give the name of the model + export 
module.exports = model("Article", ArticleSchema, "Articles");