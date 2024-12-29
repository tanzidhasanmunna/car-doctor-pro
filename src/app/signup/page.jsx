'use client'
import SocialSignin from '@/components/shared/SocialSignin'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SignUpPage() {
    const handleRegister = async (event) => {
      event.preventDefault();
      const newUser = {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      };

      const resp = await fetch('http://localhost:3000/signup/api',{
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "content-type" : "application/json"
        }
      })
      if(resp.status === 200){
        event.target.reset()
      }

      console.log(newUser)
    }
  return (
    <div className="bg-white flex justify-center items-center min-h-[calc(100vh-200px)] my-2">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            alt="Illustration of a person entering a code on a keypad with gears and a lock icon"
            className="max-w-full h-auto"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/ed1SqeHIu5vrpEqZHDN4fPyjmvEOewP1iNfJHqDUqe4l7Y49E.jpg"
            width="400"
          />
        </div>
        <div className="w-full lg:w-[500px] mt-8 lg:mt-0 lg:ml-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Sign Up
            </h2>
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="password">
                  Confirm Password
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  id="password"
                  name="password"
                  placeholder="Your password"
                  type="password"
                />
              </div>
              <button
                className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
                type="submit"
              >
                Sign Up
              </button>
            </form>
            <div className="text-center my-4 text-gray-500">
              Or Sign Up with
            </div>
            <SocialSignin/>
            <div className="text-center mt-4 text-gray-500">
              Already have an account?
              <Link className="text-orange-500" href="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
