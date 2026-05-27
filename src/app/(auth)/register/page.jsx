"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    setLoading(true);

    const { email, name, photo, password } = data;

    try {
      const { data: res, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image: photo,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message);
        setLoading(false);
        return;
      }

      if (res) {
        toast.success("Registration Successful!");

        await authClient.signOut();

        router.push("/login");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md shadow-xl rounded-2xl p-8">

        {/* TITLE */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Register to access DriveNow Car Rental
          </p>
        </div>

        {/* FORM */}
        <form
          className="space-y-5"
          onSubmit={handleSubmit(handleRegister)}
        >

          {/* NAME */}
          <div>
            <label className="font-medium">Name</label>

            <input
              type="text"
              className="input input-bordered w-full mt-1"
              placeholder="Enter your name"
              {...register("name", {
                required: "Name is required",
              })}
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* PHOTO */}
          <div>
            <label className="font-medium">Photo URL</label>

            <input
              type="text"
              className="input input-bordered w-full mt-1"
              placeholder="Photo URL"
              {...register("photo", {
                required: "Photo URL is required",
              })}
            />

            {errors.photo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.photo.message}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="font-medium">Email</label>

            <input
              type="email"
              className="input input-bordered w-full mt-1"
              placeholder="Enter email"
              {...register("email", {
                required: "Email is required",
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="font-medium">Password</label>

            <input
              type="password"
              className="input input-bordered w-full mt-1"
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",

                minLength: {
                  value: 6,
                  message:
                    "Password must be at least 6 characters",
                },

                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                  message:
                    "Must include uppercase and lowercase letter",
                },
              })}
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* BUTTON */}
          <button
            disabled={loading}
            className="btn btn-primary w-full rounded-xl"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* LOGIN LINK */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;