const mongoose = require("mongoose");

const SprintsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["Todo", "In progress", "To test", "Done"],
  },
});

const Sprint = mongoose.model("Sprints", SprintsSchema);

module.exports = Sprint;
