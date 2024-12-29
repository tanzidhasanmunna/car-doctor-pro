"use client";
import { getServiceDetails } from "@/services/getServices";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import moment from "moment";

export default function page({ params }) {
  const paramsId = use(params);
  const [serviceDetails, setServiceDetails] = useState({});
  const loadService = async () => {
    const serviceDetails = await getServiceDetails(paramsId.id);
    setServiceDetails(serviceDetails.service);
  };

  const { data } = useSession();

  const { _id, title, price, img } = serviceDetails || {};
  const handleOrder = async (e) => {
    e.preventDefault(); // Add your order logic here
    const form = e.target;
    const name = form.firstName.value + " " + form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const date = moment().format("D-M-YY");

    const newBookings = {
      orderDate: date,
      img: img,
      price,
      serviceName: title,
      customerName: name,
      email,
      phone,
      message,
    };

    const resp = await fetch(`${process.env.BASE_URL}/checkout/api/${_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBookings),
    });
    console.log(resp);
  };

  useEffect(() => {
    loadService();
  }, []);
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
        <form onSubmit={handleOrder} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              className="w-full p-4 border border-gray-300 rounded-lg"
              placeholder="First Name"
              name="firstName"
              defaultValue={data?.user?.name}
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
              defaultValue={data?.user?.phone}
              type="text"
            />
            <input
              className="w-full p-4 border border-gray-300 rounded-lg"
              placeholder="Your Email"
              name="email"
              defaultValue={data?.user?.email}
              type="email"
            />
          </div>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg h-32"
            placeholder="Your Message"
            name="message"
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
