import { connectDb } from "@/util/db";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function GET<T extends Request | NextRequest>(req: T) {
  try {
    await connectDb();
    const id = req.url?.slice(req.url.lastIndexOf("/") + 1);
    const eventsCollection = mongoose.connection.db.collection("experts");
    const expert = await eventsCollection.findOne({
      _id: new mongoose.Types.ObjectId(id as string),
    });

    if (!expert) {
      throw new Error("No Data available");
    }
    return NextResponse.json(expert);
  } catch (error) {
    return NextResponse.json({ message: "Some thing went Wrong!" });
  }
}
