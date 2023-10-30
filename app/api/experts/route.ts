import { connectDb } from "@/util/db";
import mongoose from "mongoose";
import { NextResponse ,NextRequest} from "next/server";

export async function GET<T extends Request | NextRequest>(req: T) {
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
