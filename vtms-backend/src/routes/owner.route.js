const express = require("express");
const { registerDefinition } = require("swaggiffy");
const {
  createOwner,
  getOwners,
  getOwnerByEmail,
} = require("../controllers/owner.controller");
const { authorize, protect } = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });


router.get("/", getOwners);


router.post("/", protect,authorize, createOwner);


router.get("/:email", getOwnerByEmail);

registerDefinition(router, {tags: "Vehicle", basePath: "/api/vehicle", mappedSchema: "Vehicle"});


module.exports = router;
