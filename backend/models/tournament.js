const { Schema, model, Types } = require("../connection");

const schema = new Schema({
  title: { type: String, required: true, unique: true },
  game: {type : String, required : true},
  description: String,
  createdBy: { type: Types.ObjectId, ref: "user" },
  players: [{ type: Types.ObjectId, ref: "player" }],
  tournamentMatches: Object,
  categories: [],
  image : String,
  created_at: Date,
  updated_at: Date,
});


module.exports = model("tournament", schema);