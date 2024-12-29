"use client";
import { fetchData } from "next-auth/client/_utils";
import Image from "next/image";
import { use, useEffect, useState } from "react";

export default function page({ params }) {
  const paramsId = use(params);
  const id = paramsId.id;
  const [booking, setBooking] = useState({});
  const { title, price, phone, email, customerName, message } = booking;
  console.log(customerName);
  const loadBooking = async () => {
    const response = await fetch(
      `http://localhost:3000/my-bookings/api/booking/${id}`
    );
    const booking = await response.json();
    setBooking(booking.response);
  };
  useEffect(() => {
    loadBooking();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault(); // Add your order logic here
    const form = e.target;
    const phone = form.phone.value;

    const updateBookings = {
      phone,
    };

    const resp = await fetch(
      `http://localhost:3000/my-bookings/api/booking/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateBookings),
      }
    );
    const data = await resp.json();
    console.log(data.response.modifiedCount);
    if (data.response.modifiedCount > 0) {
      loadBooking();
    }
  };

  return (
    <div>
      <div className="relative">
        <Image
          alt="A person working on a car engine"
          className="w-full h-64 object-cover rounded-lg"
          height="300"
          src="https://storage.googleapis.com/a1aa/image/PsNFNhgfpoWkIKwQ9HsTdeMQwnJvIDhiOaNE77IVyaxf7ZvnA.jpg"
          width="1200"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
          <h1 className="text-white text-4xl font-bold">Check Out</h1>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2">
          Home/Checkout
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-10 p-10 rounded-lg shadow-md bg-gray-100 my-10">
        <div className="border-2 border-red-300 rounded-lg my-3 w-96 mx-auto p-4">
          <h2 className="text-center font-bold text-xl">Service Info</h2>
          <p>
            <span className="font-bold">Booked Service:</span> {title}
          </p>
          <p>
            <span className="font-bold">Price:</span> ${price}
          </p>
        </div>
        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              className="w-full p-4 border border-gray-300 rounded-lg"
              placeholder="First Name"
              name="firstName"
              defaultValue={customerName}
              type="text"
            />
            <input
              className="w-full p-4 border border-gray-300 rounded-lg"
              placeholder="Last Name"
              name="lastName"
              type="text"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              className="w-full p-4 border border-gray-300 rounded-lg"
              placeholder="Your Phone"
              name="phone"
              defaultValue={phone}
              type="text"
            />
            <input
              className="w-full p-4 border border-gray-300 rounded-lg"
              placeholder="Your Email"
              name="email"
              defaultValue={email}
              type="email"
            />
          </div>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg h-32"
            placeholder="Your Message"
            name="message"
            defaultValue={message}
          ></textarea>
          <button
            className="w-full bg-red-500 text-white py-4 rounded-lg font-bold text-lg"
            type="submit"
          >
            Order Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
