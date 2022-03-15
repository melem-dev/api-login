const router = require("express").Router();

router.get("/login");
router.get("/validate");
router.post("/registry");
router.get("/recovery");
router.put("/recovery");

module.exports = router;
