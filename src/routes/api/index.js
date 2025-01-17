"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// ROUTER INDEX:

// URL: /

// blogCategory:
router.use("/category", require("./blogCategoryRoute"));
// blogPost:
router.use("/post", require("./blogPostRoute"));
// user:
router.use("/user", require("./userRoute"));

module.exports = router;
