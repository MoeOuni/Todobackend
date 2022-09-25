const mongoose = require("mongoose");

const BacklogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  index: {
    type: Number,
  },
});

BacklogSchema.pre("save", async function (next) {
  const docsCount = await Backlog.countDocuments();

  this.index = docsCount + 1;

  next();
});

const Backlog = mongoose.model("Backlogs", BacklogSchema);
module.exports = Backlog;
