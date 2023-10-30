import EventsModel from "@/models/events";
import { connectDb } from "@/util/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  try {
    await connectDb();
    const events = await EventsModel.find();
    return NextResponse.json({ events });
  } catch (error) {
    return NextResponse.json({ message: "Some thing went Wrong!" });
  }
}
