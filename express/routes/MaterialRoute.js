const express = require("express");
const router = express.Router();
const controller = require("../controller/MaterialController");

router.get("/", controller.getAll);
router.post("/", controller.create);
router.put("/", controller.edit);
router.delete("/:id", controller.remove);

module.exports = router;
