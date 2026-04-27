const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    diary_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Diary",
    },

    type: {
      type: String, // e.g. "CREATE_PAGE", "EDIT_ENTRY"
    },

    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Activity", activitySchema);