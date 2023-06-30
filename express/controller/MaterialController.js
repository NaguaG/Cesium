const MaterialSchema = require("../models/MaterialSchema");

const create = async (req, res) => {
  let material = await MaterialSchema.create(req.body);
  res.status(200).json(material);
};

const edit = async (req, res) => {
  await MaterialSchema.updateOne({ _id: req.body._id }, req.body);
  res.status(200).json(req.body);
};

const remove = async (req, res) => {
  await MaterialSchema.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "success" });
};

const getAll = async (req, res) => {
  const materials = await MaterialSchema.find();
  res.status(200).json(materials);
};

module.exports = { create, edit, remove, getAll };
