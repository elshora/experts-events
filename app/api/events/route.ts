import EventsModel from "@/models/events";
import { connectDb } from "@/util/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET<T extends Request | NextRequest>(req: T) {
  try {
    await connectDb();
    const events = await EventsModel.find();
    return NextResponse.json({ events }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Some thing went Wrong!" });
  }
}
