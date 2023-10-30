import mongoose from "mongoose";
const Schema = mongoose.Schema;

const EventsSchema = new Schema<EVENT>(
  {
    internalId: { type: String },
    title: { type: String },
    description: { type: String },
    link: { type: String },
    organizer: { type: String },
    location: { type: String },
    date: { type: Number },
    externalLinks: [{ type: String }],
    sessions: [{ type: Schema.Types.ObjectId, ref: "session" }],
    tags: [{ type: String }],
  },
  {
    timestamps: true,
  }
);
const EventsModel =
  mongoose.models.Event || mongoose.model("Event", EventsSchema);

export default EventsModel;
