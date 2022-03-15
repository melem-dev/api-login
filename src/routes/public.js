const router = require("express").Router();

const { _Auth, _User } = require("../controllers");
const WAuth = require("../middlewares/auth");

router.get("/login", _Auth.Login);
router.get("/validate", WAuth, _Auth.Validate);
router.post("/registry", _User.Create, _Auth.Login);
router.get("/recovery", _Auth.GetRecovery);
router.put("/recovery", _Auth.SetRecovery);

module.exports = router;
