import ExpertsModel from "@/models/experts";
import { connectDb } from "@/util/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET<T extends Request | NextRequest>(req: T) {
  try {
    await connectDb();
    const experts = await ExpertsModel.find();
    return NextResponse.json({ experts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Some thing went Wrong!" });
  }
}
