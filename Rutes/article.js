const express = require("express");
const router = express.Router();

const ArticleController = require("../Controllers/article");

router.get("/test", ArticleController.test);

router.get("/testing", ArticleController.testing);

//util rute
router.post("/create", ArticleController.create);


router.get("/articles/:last?", ArticleController.getArticles);

router.get("/article/:id", ArticleController.one);


module.exports = router;