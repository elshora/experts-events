import { connectDb } from "@/util/db";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  try {
    await connectDb();
    const eventsCollection = mongoose.connection.db.collection("experts");
    const cursor = eventsCollection.find({});
    const experts = await cursor.toArray();
    if (!experts.length) {
      throw new Error("No Data available");
    }
    return NextResponse.json(experts);
  } catch (error) {
    return NextResponse.json({ message: "Some thing went Wrong!" });
  } finally {
    // await disconnectDb();
  }
}
