const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    Title: { type: String, require: true },
    rating: { type: Number, require: true },
    Category: { type: String, require: true },
    Price: { type: Number, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const MoviesSchema = mongoose.model("movies", moviesSchema);
module.exports = MoviesSchema;

