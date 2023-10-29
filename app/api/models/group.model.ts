import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  name: { type: String },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "group",
  },
  child_groups: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "group",
  },
  people: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "person",
  }
});

export const groupModel =
  mongoose.models.group || mongoose.model("group", groupSchema, "Groups");
