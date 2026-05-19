'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegistarPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const handleLOginFunc = async (data) => {


        const { email, name, photo, password } = data;


        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });


        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("Registration Successful")
            await authClient.signOut();
            router.push("/login");
        }
    }
    return (
        <div className='container mx-auto bg-slate-100 flex items-center justify-center h-[80vh]'>
            <div className='bg-white'>
                <h1 className='text-3xl font-bold mb-5'>Registar Your Account</h1>

                <form className='space-y-4' onSubmit={handleSubmit(handleLOginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text"
                            className="input"
                            name='name'
                            {...register("name", { required: true })}
                            placeholder="Type here Name" />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text"
                            className="input"
                            name='photo'
                            {...register("photo", { required: true })}
                            placeholder="Type here photo uRL" />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email"
                            className="input"
                            name='email'
                            {...register("email", { required: true })}
                            placeholder="Type here Email" />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password"
                            className="input"
                            {...register("password", { required: "password is requered" })}
                            placeholder="Type here Password" />
                        {errors.password && <p>{errors.password.message}</p>}
                    </fieldset>

                    <button className='btn btn-neutral w-full'>Registar</button>
                </form>

            </div>

        </div>
    );
};

export default RegistarPage;