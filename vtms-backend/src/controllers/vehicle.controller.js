const { Vehicle, validateData } = require("../model/vehicle");

//create a vehicle with the owner id
exports.createVehicle = async (req, res) => {
    try {
        const { error } = validateData(req.body);
        if (error) return res.status(400).send(error.details[0].message);
    
        let vehicle = new Vehicle({
        model: req.body.model,
        vin: req.body.vin,
        engine: req.body.engine,
        color: req.body.color,
        plateNumber: req.body.plateNumber,
        owner: req.body.owner
        });
    
        vehicle = await vehicle.save();
        res.send(vehicle);
    } catch (error) {
        res.status(500).send(error.toString());
    }
    }
// get all vehicles
exports.getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.send(vehicles);
    } catch (error) {
        res.status(500).send(error.toString());
    }
}

// get vehicle by owner id
exports.getVehicleByOwnerId = async (req, res) => {
    try {
        const vehicle = await Vehicle.find({ owner: req.params.ownerId });
        if (!vehicle) return res.status(404).send("Vehicle not found");
        res.send(vehicle);
    } catch (error) {
        res.status(500).send(error.toString());
    }
}