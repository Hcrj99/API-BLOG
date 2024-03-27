const Article = require("../Models/Article");
const { validateArticle } = require("../helper/validate");

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
        validateArticle(params);
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

    if (req.params.last) {
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
            status: "success",
            article
        })
    }).catch(error => {
        return res.status(error).json({
            status: "error",
            message: "missing article"
        });
    })
}

//delete articles
const deleteArticle = (req, res) => {
    //get id by url
    let id = req.params.id;
    Article.findOneAndDelete({ _id: id }).then(articleDelete => {
        return res.status(200).json({
            status: "success",
            articleDelete,
            message: "article delete"
        })
    }).catch(error => {
        return res.status(error).json({
            status: "error",
            message: "error to delete"
        });
    })
}


//edit and upgrade articles
const editArticle = (req, res) => {
    //get id by url
    let id = req.params.id;

    //get new data from body
    let parameters = req.body;

    //validate data
    try {
        validateArticle(parameters);
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "missing data to send"
        })
    }

    //find + upgrade articles + return response
    Article.findOneAndUpdate({ _id: id }, req.body, { new: true }).then(articleUpgrade => {
        return res.status(200).json({
            status: "success",
            articleUpgrade,
            message: "article edited"
        })
    }).catch(error => {
        return res.status(error).json({
            status: "error",
            message: "error to edite"
        });
    })
}

module.exports = {
    test,
    testing,
    create,
    getArticles,
    one,
    deleteArticle,
    editArticle
}