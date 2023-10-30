import EventsModel from "@/models/events";
import { connectDb } from "@/util/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET<T extends Request | NextRequest>(req: T) {
  try {
    await connectDb();
    console.log("test");
    const events = await EventsModel.find();
    return NextResponse.json({ events });
  } catch (error) {
    return NextResponse.json({ message: "Some thing went Wrong!" });
  }
}
