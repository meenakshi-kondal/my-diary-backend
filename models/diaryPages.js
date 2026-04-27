const mongoose = require("mongoose");

const diaryPageSchema = new mongoose.Schema(
  {
    diary_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Diary",
      required: true,
    },

    pageNumber: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// prevent duplicate page per diary
diaryPageSchema.index({ diary_id: 1, pageNumber: 1 }, { unique: true });

module.exports = mongoose.model("DiaryPage", diaryPageSchema);