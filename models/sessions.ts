import mongoose, { Schema } from "mongoose";

const SessionsSchema = new Schema<SESSION>(
  {
    internalId: { type: String },
    title: { type: String },
    description: { type: String },
    event: { type: Schema.Types.ObjectId, ref: "event" },
    experts: [{ type: Schema.Types.ObjectId, ref: "expert" }],
  },
  {
    timestamps: true,
  }
);

const session =
  mongoose.models.session || mongoose.model("session", SessionsSchema);

export default session;
