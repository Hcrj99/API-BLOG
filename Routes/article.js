const express = require("express");
const router = express.Router();
const multer = require("multer");

const ArticleController = require("../Controllers/article");    

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './images/articles/');
    },

    filename: function(req, file, cb){
        cb(null, "article" + Date.now() + file.originalname);
    }
});

const ups = multer({
    storage: storage
});

router.get("/test", ArticleController.test);

router.get("/testing", ArticleController.testing);

//util rute
router.post("/create", ArticleController.create);

router.get("/articles/:last?", ArticleController.getArticles);

router.get("/article/:id", ArticleController.one);

router.delete("/article/:id", ArticleController.deleteArticle);

router.put("/article/:id", ArticleController.editArticle);

router.post("/up-image/:id", ups.single("file"), ArticleController.up);

router.get("/article-image/:image",  ArticleController.imageArchive);


module.exports = router;