import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const { id } = params;
  const bookingsCollection = db.collection("bookings");
  try {
    const response = await bookingsCollection.deleteOne({
      _id: new ObjectId(id),
    });
    return new Response(JSON.stringify({ response }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};

export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const { id } = params;
  const updatedBooking = await request.json();
  const bookingsCollection = db.collection("bookings");
  try {
    const response = await bookingsCollection.updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          phone: updatedBooking.phone,
        },
      },
      {
        upsert: true,
      }
    );
    return new Response(JSON.stringify({ response }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const { id } = params;
  const bookingsCollection = db.collection("bookings");
  try {
    const response = await bookingsCollection.findOne({
      _id: new ObjectId(id),
    });
    return new Response(JSON.stringify({ response }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};
