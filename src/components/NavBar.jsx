"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import avater from "@/assets/user.png";
import { authClient } from "@/lib/auth-client";
import NavLink from "./NavLink";
import { Button } from "@heroui/react";

const NavBar = () => {
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
                    <li><NavLink href="/addcar">Add Cars</NavLink></li>
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

                        {/* Avatar */}
                        <Image
                            src={
                                user?.image?.startsWith("http")
                                    ? user.image
                                    : avater
                            }
                            height={40}
                            width={40}
                            alt="avatar"
                            className="rounded-full border"
                        />

                        {/* Profile */}
                        <Link href="/myprofile">
                            <Button variant="ghost" className="text-xs">
                                Profile
                            </Button>
                        </Link>

                        {/* Logout */}
                        <button
                            onClick={async () => await authClient.signOut()}
                            className="btn btn-sm btn-outline btn-error"
                        >
                            Logout
                        </button>
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