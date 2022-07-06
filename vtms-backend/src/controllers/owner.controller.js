const { Owner, validateData } = require("../model/owner");

// POST /Owners
exports.createOwner = async (req, res) => {
  try {
    const { error } = validateData(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let Owner = new Owner({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      telephone: req.body.telephone,
      nationalId: req.body.nationalId,
      
    });

    owner = await owner.save();
    res.send(owner);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};

// GET /Owners
exports.getOwners = async (req, res) => {
  try {
    const owners = await Owner.find();
    res.send(owners);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};

//GET /owners/:email
exports.getOwnerByEmail = async (req, res) => {
  try {
    const owner = await Owner.findOne({ email: req.params.email });
    if (!owner) return res.status(404).send("Owner not found");
    res.send(owner);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};
