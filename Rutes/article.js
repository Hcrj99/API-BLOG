const express = require("express");
const router = express.Router();

const ArticleController = require("../Controllers/article");

router.get("/test", ArticleController.test);

router.get("/testing", ArticleController.testing);


module.exports = router;