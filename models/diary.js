const mongoose = require("mongoose");

const diarySchema = new mongoose.Schema(
  {
    // Reference to User table
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Diary name (unique per user or globally depending on your need)
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    // Page settings
    totalPages: {
      type: Number,
      default: 100,
    },

    occupiedPages: {
      type: Number,
      default: 0,
    },

    // Last activity reference
    lastActivity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Activity",
      default: null,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
);

module.exports = mongoose.model("Diary", diarySchema);