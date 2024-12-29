import { connectDB } from "@/lib/connectDB";
import { services } from "@/lib/services";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const servicesCollection = db.collection("services");

  try {
    await servicesCollection.deleteMany();

    const resp = await servicesCollection.insertMany(services);

    return NextResponse.json({ message: "Success" });
  } catch (error) {
    return NextResponse.status(500).json({ error: "Failed to seed services" });
  }
};
