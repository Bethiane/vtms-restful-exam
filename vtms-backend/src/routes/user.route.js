const express = require("express");
const { registerDefinition } = require("swaggiffy");
const { register, login } = require("../controllers/user.controller");
const router = express.Router();


router.post("/register", register);


router.post("/login", login);

registerDefinition(router, {tags: "Auth", basePath: "/api/user", mappedSchema: "User"});

module.exports = router;
