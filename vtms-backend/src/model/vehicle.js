const mongoose = require("mongoose");
const Joi = require("joi");
const { registerSchema } = require('swaggiffy');


const VehicleSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },

  vin: {
    type: String,
    required: true,
  },

  engine: {
    type: String,
    required: true,
  },

  color: {
    type: String,
    required: true,
  },

  plateNumber: {
    type: String,
    required: true,
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Owner",
    required: true,
  },

});

exports.validateData = (data) => {
  const schema = Joi.object({
    model: Joi.string().min(3).required(),
    vin: Joi.string().min(3).required(),
    engine: Joi.string().min(5).required(),
    color: Joi.string().min(5).required(),
    plateNumber: Joi.string().min(5).required(),
    owner: Joi.string().min(5).required(),
  });
  return schema.validate(data);
};

registerSchema("Vehicle", VehicleSchema, {orm: "mongoose"});
const Vehicle = mongoose.model("Vehicle", VehicleSchema);
module.exports.Vehicle = Vehicle;

