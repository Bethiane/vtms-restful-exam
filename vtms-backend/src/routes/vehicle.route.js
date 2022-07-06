const express = require("express");
const { registerDefinition } = require("swaggiffy");
const {
    createVehicle,
    getVehicles,
    getVehicleByOwnerId,
} = require("../controllers/vehicle.controller");
const { authorize, protect } = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });


router.get("/", getVehicles);


router.post("/", protect,authorize, createVehicle);


router.get("/:userId", getVehicleByOwnerId);

registerDefinition(router, {tags: "Vehicle", basePath: "/api/vehicle", mappedSchema: "Vehicle"});

module.exports = router;