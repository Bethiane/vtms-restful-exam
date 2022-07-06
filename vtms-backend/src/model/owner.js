const mongoose = require("mongoose");
const Joi = require("joi");
const { registerSchema } = require('swaggiffy');


const OwnerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  telephone: {
    type: String,
    required: true,
  },

  nationalId: {
    type: Number,
    required: true,
  },

});

exports.validateData = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    email: Joi.string().min(5).required().email(),
    telephone: Joi.string().min(5).required(),
    nationalId: Joi.number().min(5).required(),
  });
  return schema.validate(data);
};

registerSchema("Owner", OwnerSchema, {orm: "mongoose"});
const Owner = mongoose.model("Owner", OwnerSchema);
module.exports.Owner = Owner;

