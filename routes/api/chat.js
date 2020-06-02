const router = require("express").Router();
const chatController = require("../../../../../../Downloads/DiceRollerz-master/controllers/chatController");

// Matches with "/api/books"
router.route("/")
  .get(chatController.findAll)
  .post(chatController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(chatController.findById)
  .put(chatController.update)

module.exports = router;
