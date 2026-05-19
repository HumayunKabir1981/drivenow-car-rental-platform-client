'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {

    const [isShowPassword, setIsShowPassword] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLOginFunc = async (data) => {

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        if (error) {
            alert(error.message || "Email or Password wrong ")
            return;
        }
    }

    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
        <div className='container mx-auto bg-slate-100 flex flex-col gap-10 items-center justify-center h-screen '>

            <div className='flex flex-col gap-10 items-center justify-center  '>
                <h1 className='text-xl font-semibold text-green-900 mt-5'>to continue to QurbaniHat</h1>
                <button
                    onClick={handleGoogleSignin}
                    className='btn btn-primary w-full flex justify-between items-center px-4 h-14'
                >

                    <span className='bg-white p-2 rounded flex items-center justify-center text-xl'>
                        <FcGoogle />
                    </span>


                    <span className='text-xl'>Login with Google</span>
                </button>
                <span className='text-2xl font-bold mt-5'>or</span>

            </div>


            <div className='bg-white'>
                <h1 className='text-3xl font-bold mb-5'>Login Your Account</h1>

                <form className='space-y-4' onSubmit={handleSubmit(handleLOginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email"
                            className="input"
                            name='email'
                            {...register("email", { required: "Email is requered" })}

                            placeholder="Type here Email" />
                        {errors.email && <p>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={isShowPassword ? "text" : "password"}
                            className="input"

                            {...register("password", { required: "password is requered" })}

                            placeholder="Type here Password" />

                        <span className='absolute right-1 top-5 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>
                            {isShowPassword ? <FaEye /> : <FaEyeLowVision />}
                        </span>
                        {errors.password && <p>{errors.password.message}</p>}
                    </fieldset>

                    <button className='btn btn-neutral w-full'>Login</button>
                </form>

            </div>
            <p className='text-xl font-bold'> Don't have account ?{' '}
                <Link href='/register' className='btn btn-soft btn-accent'>
                    Register
                </Link>
            </p>

        </div>
    );
};

export default LoginPage;