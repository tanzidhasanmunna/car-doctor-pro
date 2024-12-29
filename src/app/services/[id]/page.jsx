import { getServiceDetails } from "@/services/getServices";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Details",
  description: "Services Details Page",
};
export default async function page({ params }) {
  const id = params.id;
  const serviceDetails = await getServiceDetails(id);
  const { title, description, price, img, facility } = serviceDetails.service;
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
          <h1 className="text-white text-4xl font-bold">Service Details</h1>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2">
          Home/Service Details
        </div>
      </div>

      <div className="container mx-auto mt-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Image
              alt="Close-up of a person using a polishing machine on a car"
              className="w-full h-64 object-cover rounded-lg"
              height="400"
              src={img}
              width="800"
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Services</h2>
            <ul>
              <li className="mb-2">
                <a
                  className="flex items-center justify-between bg-red-500 text-white px-4 py-2 rounded-lg"
                  href="#"
                >
                  Full Car Repair
                  <i className="fas fa-arrow-right"></i>
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="flex items-center justify-between bg-gray-100 text-gray-800 px-4 py-2 rounded-lg"
                  href="#"
                >
                  Engine Repair
                  <i className="fas fa-arrow-right"></i>
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="flex items-center justify-between bg-gray-100 text-gray-800 px-4 py-2 rounded-lg"
                  href="#"
                >
                  Automatic Services
                  <i className="fas fa-arrow-right"></i>
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="flex items-center justify-between bg-gray-100 text-gray-800 px-4 py-2 rounded-lg"
                  href="#"
                >
                  Engine Oil Change
                  <i className="fas fa-arrow-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="mb-6">{description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {facility.map((fa, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg shadow-md border-t-4 border-red-500"
                >
                  <h2 className="text-xl font-semibold mb-2">{fa.name}</h2>
                  <p>{fa.details}</p>
                </div>
              ))}
            </div>
            <p className="mb-6">
              There Are Many Variations Of Passages Of Lorem Ipsum Available,
              But The Majority Have Suffered Alteration In Some Form, By
              Injected Humour, Or Randomised Words Which Don't Look Even
              Slightly Believable. If You Are Going To Use A Passage Of Lorem
              Ipsum, You Need To Be Sure There Isn't Anything Embarrassing
              Hidden In The Middle Of Text.
            </p>
            <h2 className="text-2xl font-bold mb-4">
              3 Simple Steps to Process
            </h2>
            <p className="mb-6">
              There Are Many Variations Of Passages Of Lorem Ipsum Available,
              But The Majority Have Suffered Alteration In Some Form, By
              Injected Humour, Or Randomised Words Which Don't Look Even
              Slightly Believable. If You Are Going To Use A Passage Of Lorem
              Ipsum, You Need To Be Sure There Isn't Anything Embarrassing
              Hidden In The Middle Of Text.
            </p>
          </div>
          <div className="w-full md:w-1/3 md:ml-4">
            <div className="bg-black text-white p-4 rounded-lg shadow-md mb-4">
              <h3 className="text-lg font-semibold mb-2">Download</h3>
              <div className="flex items-center mb-2">
                <i className="fas fa-file-download mr-2"></i>
                <a className="text-white" href="#">
                  Our Brochure
                </a>
                <i className="fas fa-arrow-right ml-2"></i>
              </div>
              <div className="flex items-center">
                <i className="fas fa-file-download mr-2"></i>
                <a className="text-white" href="#">
                  Company Details
                </a>
                <i className="fas fa-arrow-right ml-2"></i>
              </div>
            </div>
            <div className="bg-black text-white p-4 rounded-lg shadow-md mb-4">
              <div className="flex items-center mb-4">
                <img
                  alt="Car Doctor Logo"
                  className="mr-2"
                  height="50"
                  src="https://storage.googleapis.com/a1aa/image/VcSAFfuDbxUfr0VVlkA6AoDxeULLO9qf9Z8JwXPEneJyDW2fE.jpg"
                  width="50"
                />
                <h3 className="text-lg font-semibold">Car Doctor</h3>
              </div>
              <p className="mb-4">Need Help? We Are Here To Help You</p>
              <div className="bg-white text-black p-2 rounded-lg mb-4">
                <p className="font-semibold">Car Doctor Special</p>
                <p>
                  Save up to
                  <span className="text-red-500 font-bold">60% off</span>
                </p>
              </div>
              <button className="bg-red-500 text-white py-2 px-4 rounded-lg">
                Get A Quote
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <p className="text-2xl font-bold mb-4">Price ${price}</p>
              <Link href={`/checkout/${id}`}>
                <button className="bg-red-500 text-white py-2 px-4 rounded-lg w-full">
                  Proceed Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
