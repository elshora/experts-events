import EventsModel from "@/models/events";
import { connectDb } from "@/util/db";
import moment from "moment";
import { NextRequest, NextResponse } from "next/server";
// type queryType = {
//   date?: object;
// };

export async function GET<T extends Request | NextRequest>(req: T) {
  try {
    await connectDb();
    // const currentDate = moment(); // Current date and time
    // const url = new URL(req.url);
    // const searchParam = new URLSearchParams(url.search); // Get the searchParam from the query string
    // const query: queryType = {};
    // if (searchParam.get("period") === "upcoming") {
    //   query.date = { $gte: currentDate.toDate() };
    // } else if (searchParam.get("period") === "old") {
    //   query.date = { $lt: currentDate.toDate() };
    // }
    const events = await EventsModel.find();
    return NextResponse.json({ events }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Some thing went Wrong!" });
  }
}
