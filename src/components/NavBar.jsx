"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import avater from "@/assets/user.png";
import { authClient } from "@/lib/auth-client";
import NavLink from "./NavLink";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const NavBar = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/90 border-b border-slate-800 shadow-lg">

      <div className="max-w-7xl mx-auto navbar px-5 lg:px-8 h-[78px]">

        {/* LEFT */}
        <div className="navbar-start">

          {/* MOBILE MENU */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white"
            >
              <HiOutlineMenuAlt3 size={24} />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[999] p-3 shadow-xl bg-slate-900 rounded-xl w-56 text-slate-200 border border-slate-700"
            >
              <li>
                <NavLink href="/">Home</NavLink>
              </li>

              <li>
                <NavLink href="/explorecars">
                  Explore Cars
                </NavLink>
              </li>
            </ul>
          </div>

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="logo"
              width={145}
              height={80}
              className="object-cover"
            />
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 text-slate-300 font-medium">

            <li>
              <NavLink href="/">Home</NavLink>
            </li>

            <li>
              <NavLink href="/explorecars">
                Explore Cars
              </NavLink>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end">

          {isPending ? (
            <span className="loading loading-spinner loading-sm text-cyan-400"></span>
          ) : user ? (
            <div className="flex items-center gap-3">

              {/* Greeting */}
              <div className="hidden md:flex flex-col text-right">
                <span className="text-xs text-slate-400">
                  Welcome back
                </span>

                <span className="text-sm font-semibold text-white">
                  {user?.name}
                </span>
              </div>

              {/* PROFILE DROPDOWN */}
              <div className="dropdown dropdown-end">

                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 px-3 py-2 rounded-xl cursor-pointer transition"
                >
                  <Image
                    src={
                      user?.image?.startsWith("http")
                        ? user.image
                        : avater
                    }
                    width={40}
                    height={40}
                    alt="avatar"
                    className="rounded-full border-2 border-cyan-400 object-cover"
                  />

                  <span className="text-sm font-medium text-slate-200 hidden sm:block">
                    My Account ▾
                  </span>
                </div>

                {/* DROPDOWN */}
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-4 z-[999] p-3 shadow-2xl bg-slate-900 rounded-2xl w-64 border border-slate-700 text-slate-300"
                >
                  {/* USER INFO */}
                  <li className="pointer-events-none border-b border-slate-700 pb-3 mb-3">

                    <div className="flex items-center gap-3">
                      <Image
                        src={
                          user?.image?.startsWith("http")
                            ? user.image
                            : avater
                        }
                        width={42}
                        height={42}
                        alt="user"
                        className="rounded-full"
                      />

                      <div>
                        <p className="font-semibold text-white">
                          {user?.name}
                        </p>

                        <p className="text-xs text-slate-400">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <Link href="/myprofile">
                      My Profile
                    </Link>
                  </li>

                  <li>
                    <Link href="/addcar">
                      Add Car
                    </Link>
                  </li>

                  <li>
                    <Link href="/mybookings">
                      My Bookings
                    </Link>
                  </li>

                  <li className="border-t border-slate-700 mt-2 pt-2">
                    <button
                      onClick={async () => {
                        await authClient.signOut();
                        router.push("/");
                      }}
                      className="text-red-400 hover:text-red-300"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">

              <Link href="/login">
                <Button
                  variant="bordered"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition rounded-xl"
                >
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl shadow-lg">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;