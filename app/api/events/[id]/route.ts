import EventsModel from "@/models/events";
import session from "@/models/sessions";
import { connectDb } from "@/util/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET<T extends Request | NextRequest>(req: T) {
  try {
    const id = req.url?.slice(req.url.lastIndexOf("/") + 1);
    await connectDb();
    const event = await EventsModel.findById(id);
    const sessionIds = event.sessions;
    const sessions = await session.find({ _id: { $in: sessionIds } });
    event.sessions = await sessions;
    return NextResponse.json({ event });
  } catch (error) {
    return NextResponse.json(
      { message: "Some thing went Wrong!" },
      { status: 400 }
    );
  }
}
