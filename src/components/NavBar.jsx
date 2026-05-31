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

const NavBar = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;

    return (
        <div className="navbar bg-amber-50 sticky top-0 z-50 shadow-md px-6 md:px-10">

            {/* LEFT - LOGO */}
            <div className="navbar-start">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="logo"
                        width={140}
                        height={80}
                        className="object-cover"
                    />
                </Link>
            </div>

            {/* CENTER - LINKS */}
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 text-lg text-neutral gap-2">
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/explorecars">Explore Cars</NavLink></li>

                </ul>
            </div>

            {/* RIGHT - AUTH */}
            <div className="navbar-end flex items-center gap-4">

                {/* LOADING STATE */}
                {isPending ? (
                    <span className="loading loading-spinner loading-sm"></span>
                ) : user ? (
                    <div className="flex items-center gap-3">

                        {/* Greeting */}
                        <span className="text-sm font-semibold hidden sm:block">
                            Hi, {user?.name || "User"}
                        </span>


                        {/* Profile Dropdown */}
                        <div className="dropdown dropdown-end">

                            {/* Trigger Button */}
                            <div
                                tabIndex={0}
                                role="button"
                                className="flex items-center gap-2 cursor-pointer hover:bg-base-200 px-3 py-2 rounded-lg"
                            >
                                <Image
                                    src={
                                        user?.image?.startsWith("http")
                                            ? user.image
                                            : avater
                                    }
                                    width={38}
                                    height={38}
                                    alt="avatar"
                                    className="rounded-full border"
                                />

                                <span className="font-medium">
                                    My Profile ▾
                                </span>
                            </div>

                            {/* Dropdown Menu */}
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-56"
                            >
                                {/* User Info */}
                                <li className="pointer-events-none border-b pb-2 mb-2">
                                    <p className="font-semibold">{user?.name}</p>
                                    <p className="text-xs text-gray-500">{user?.email}</p>
                                </li>

                                 <li>
                                    <Link href="/myprofile">My Profile</Link>
                                </li>

                                <li>
                                    <Link href="/addcar">Add Car</Link>
                                </li>

                                <li>
                                    <Link href="/mybookings">My Bookings</Link>
                                </li>

                                <li className="border-t mt-2 pt-2">
                                    <button
                                        onClick={async () => {
                                            await authClient.signOut();
                                            router.push("/");
                                        }}
                                        className="text-red-500"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>


                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <Link href="/login">
                            <Button variant="solid" color="primary">
                                Login
                            </Button>
                        </Link>

                        <Link href="/register">
                            <button className="btn btn-sm btn-outline btn-primary">
                                Register
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;