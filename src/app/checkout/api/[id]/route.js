import { connectDB } from "@/lib/connectDB";

export const POST = async (request, { params }) => {
  const booking = await request.json();

  const db = await connectDB();
  const { id } = params;
  const bookingsCollection = db.collection("bookings");
  try {
    const response = await bookingsCollection.insertOne({
      ...booking,
      serviceId: id,
    });
    return Response.json({ response });
  } catch (error) {
    return Response.error({ error });
  }
};
