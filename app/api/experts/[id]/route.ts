import ExpertsModel from "@/models/experts";
import { connectDb } from "@/util/db";
import { NextResponse, NextRequest } from "next/server";
require("@/models/events");
require("@/models/sessions");
export async function GET<T extends Request | NextRequest>(req: T) {
  try {
    await connectDb();
    const id = req.url?.slice(req.url.lastIndexOf("/") + 1);
    const expert = await ExpertsModel.findById(id).populate("sessions events");
    return NextResponse.json({ expert });
  } catch (error) {
    return NextResponse.json({ message: "Some thing went Wrong!" });
  }
}
