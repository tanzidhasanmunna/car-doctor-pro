"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const session = useSession();
  return (
    <nav className="flex items-center justify-between p-6">
      <Link href={"/"} className="flex items-center">
        <Image src="/assets/logo.svg" width={60} height={60} alt="logo" />
      </Link>
      <div className="hidden md:flex space-x-6">
        {NavItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-sm text-gray-900 hover:text-primary duration-300"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <i className="fas fa-shopping-cart text-gray-600"></i>
        <i className="fas fa-search text-gray-600"></i>
        <a
          className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white duration-300"
          href="#"
        >
          Appointment
        </a>

        {session.status === "authenticated" ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={() => signOut()}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link href="/login">
            <button className=" px-4 py-2 border border-primary rounded bg-primary text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

const NavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "My Bookings", href: "/my-bookings" },
  { label: "Contact", href: "/contact" },
];
