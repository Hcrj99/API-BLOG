const { json } = require("express");
const validator = require("validator");
const { param } = require("../Rutes/article");

const test = (req, res) => {
    return res.status(200).json({
        message: "test controller articles"
    });
}

const testing = (req, res) => {

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

};//rute for get -navegator

//create
const create = (req, res) => {

    //take params from post to save
    let params = req.body;

    //validate data
    //dont empty + length
    try {

        let validateTitle = !validator.isEmpty(params.title) && validator.isLength(params.title, {min: 5, max:15});
        let validateContent = !validator.isEmpty(params.content);

        if (!validateTitle || !validateContent) {
            throw new Error(" The information could not be validated");
        }

    } catch (error) {
        return res.status(400), json({
            status: "error",
            message: "missing data to send"
        })
    }


    //create object to save


    //assign values to object bassed in model 

    //save the article in db


    return res.status(200).json({
        message: "create",
        params
    });
}

module.exports = {
    test,
    testing,
    create
}