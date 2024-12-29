import { connectDB } from "@/lib/connectDB";

export const GET = async (request) => {
  const db = await connectDB();
  const email = request.nextUrl.searchParams.get("email");
  const bookingsCollection = db.collection("bookings");
  try {
    const bookings = await bookingsCollection.find({ email }).toArray();
    return new Response(JSON.stringify({ bookings }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};
