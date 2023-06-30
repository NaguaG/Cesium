const mongoose = require("mongoose");
const materialSchema = mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  volume: { type: Number, require: true },
  cost: { type: Number, require: true },
  deliveryDate: { type: Date, require: true },
});

const MaterialModel = mongoose.model("Material", materialSchema);
module.exports = MaterialModel;
