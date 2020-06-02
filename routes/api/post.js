const router = require("express").Router();
const postController = require("../../../../../../Downloads/DiceRollerz-master/controllers/postController");

// Matches with "/api/books"
router.route("/")
  .get(postController.findAll)
  .post(postController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(postController.findById)
  .put(postController.update)

module.exports = router;
