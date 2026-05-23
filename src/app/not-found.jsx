import NotFoundAnimation from "@/components/animations/NotFoundAnimation";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-6">

        <NotFoundAnimation></NotFoundAnimation>

      <div className="text-center max-w-md">
  
        <h1 className="text-8xl font-extrabold text-emerald-700">
          404
        </h1>

       
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-500 mt-2">
          The page you are looking for doesn’t exist or has been moved.
        </p>

      
        <Link href="/">
          <button className="mt-6 btn bg-emerald-600 text-white hover:bg-emerald-700 px-6">
            Go Back Home
          </button>
        </Link>

      </div>

    </div>
  );
};

export default NotFound;