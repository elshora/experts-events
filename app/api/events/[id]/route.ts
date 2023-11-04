import EventsModel from "@/models/events";
require("@/models/experts");
require("@/models/sessions");
import { connectDb } from "@/util/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET<T extends Request | NextRequest>(req: T) {
  try {
    await connectDb();
    const id = req.url?.slice(req.url.lastIndexOf("/") + 1);
    // handle populate sessions and experts for each session
    const event = await EventsModel.findById(id).populate({
      path: "sessions",
      populate: {
        path: "experts",
      },
    });
    return NextResponse.json({ event });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Some thing went Wrong!" });
  }
}
