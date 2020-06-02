const router = require("express").Router();
const chatRoutes = require("./chat");
const postRoutes = require("./post");
const userRoutes = require("./user");

// Chat routes
router.use("/chat", chatRoutes);
router.use("/post", postRoutes);
router.use("/user", userRoutes);

module.exports = router;
