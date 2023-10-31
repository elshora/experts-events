import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ExpertsSchema = new Schema<EXPERT>(
  {
    internalId: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    title: { type: String },
    organization: { type: String },
    bio: { type: String },
    imgLink: { type: String },
    sessions: [{ type: Schema.Types.ObjectId, ref: "session" }],
    events: [{ type: Schema.Types.ObjectId, ref: "event" }],
    gender: { type: String, enum: ["male", "female"] },
    nationality: { type: String },
    age: { type: Number },
    email: { type: String },
    externalLinks: [{ type: String }],
    tags: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const ExpertsModel =
  mongoose.models.expert || mongoose.model("expert", ExpertsSchema);

export default ExpertsModel;
