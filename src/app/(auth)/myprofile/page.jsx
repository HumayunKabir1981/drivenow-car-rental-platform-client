"use client";

import Image from 'next/image';
import { authClient } from "@/lib/auth-client";
import Link from 'next/link';
import React from 'react';
import avater from '@/asset/user.png'

const MyProfile = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <p className="text-center mt-10">Loading...</p>;

  const user = session?.user;

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center">

        <Image
          src={user?.image && user.image.startsWith("http")
            ? user.image
            : avater}
          width={100}
          height={100}
          alt="profile"
          className="rounded-full mx-auto"
        />

        <h2 className="text-xl font-bold mt-4">{user?.name}</h2>
        <p className="text-gray-500">{user?.email}</p>

        <Link href="/myprofile/update">
          <button className="btn btn-primary mt-5 w-full">
            Update Information
          </button>
        </Link>

      </div>

    </div>
  );
};

export default MyProfile;