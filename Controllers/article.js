const { json } = require("express");
const validator = require("validator");
const Article = require("../Models/Article");

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

        let validateTitle = !validator.isEmpty(params.title) && validator.isLength(params.title, { min: 5, max: undefined });
        let validateContent = !validator.isEmpty(params.content);

        if (!validateTitle || !validateContent) {
            throw new Error(" The information could not be validated");
        }

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "missing data to send"
        })
    }

    //create object to save + asing parameters
    const article = new Article(params);

    //save the article in db
    article.save().then((articlesave) => {
        if (!articlesave) {
            return res.status(400).json({
                status: "error",
                message: "missing data, dont save data"
            })
        }
        return res.status(200).json({
            status: "success",
            article: articlesave,
            message: "article created correct"
        });
    }).catch((error) => {
        return res.status(error).json({
            status: "error",
            message: "missing data, dont save data"
        })
    });
}

//get articles
const getArticles = (req, res) => {

    let query = Article.find({});

    if(req.params.last){
        query.limit(req.params.last);
    }


    query.sort({ date: -1 }).then((articles) => {

        return res.status(200).send({
            status: "succes",
            articles: articles
        });

    }).catch((error) => {
        return res.status(error).json({
            status: "error",
            message: "missing articles"
        });
    });
}

//get one article

const one = (req, res) => {
    //get id by url
    let id = req.params.id;
    //find article
    Article.findById(id).then(article => {
        return res.status(200).json({
            status:"success",
            article
        })
    }).catch(error => {
        return res.status(error).json({
            status: "error",
            message: "missing articles"
        });
    })
    //if not exist return error or result

}

module.exports = {
    test,
    testing,
    create,
    getArticles,
    one
}