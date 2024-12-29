"use client";
import Cart from "@/components/cards/Cart";
import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { fetchData } from "next-auth/client/_utils";

export default function page() {
  const [carts, setCarts] = useState([]);
  const session = useSession();
  const fetchCart = async () => {
    const res = await fetch(
      `${process.env.BASE_URL}/my-bookings/api?email=${session?.data?.user?.email}`
    );
    const data = await res.json();
    setCarts(data.bookings);
  };

  useEffect(() => {
    fetchCart();
  }, [session]);
  const handleDelete = async (id) => {
    const response = await fetch(
      `${process.env.BASE_URL}/my-bookings/api/booking/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    if (data.response.deletedCount > 0) {
      fetchCart();
    }
  };
  return (
    <div className="bg-gray-100">
      <div className="relative">
        <Image
          alt="A hand cleaning a car engine"
          className="w-full h-64 object-cover rounded-lg"
          height="400"
          src="https://storage.googleapis.com/a1aa/image/1nXEfGW9tzRLUCgXEMSuoloJegSc5Ytyew42CWQVDaN9SpvnA.jpg"
          width="1920"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center rounded-lg items-center">
          <h1 className="text-white text-4xl font-bold">Cart Details</h1>
          <p className="text-orange-500 mt-2">Home - Product Details</p>
        </div>
      </div>

      <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
        {carts.map((single_cart) => (
          <Cart
            key={single_cart._id}
            single_cart={single_cart}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
