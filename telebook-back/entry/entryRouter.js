const Router = require("express");
const router = new Router();
const EntryController = require("./entryController");

router.get("/findByMonth", EntryController.getByMonth);
router.get("/getReport", EntryController.getReport);

module.exports = router;
