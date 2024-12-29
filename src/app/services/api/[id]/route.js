import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const servicesCollection = db.collection("services");
  try {
    const service = await servicesCollection.findOne({ _id: params.id });
    return NextResponse.json({ service });
  } catch (error) {
    return NextResponse.status(500).json({ message: "Error fetching service" });
  }
};
