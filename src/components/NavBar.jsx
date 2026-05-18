"use client"
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import avater from '@/assets/user.png'
// import { authClient } from '@/lib/auth-client';
import NavLink from './NavLink';

const NavBar = () => {
    // const { data: session, isPending } = authClient.useSession()

    // const user = session?.user;
    // console.log("session user", user);
    return (
        <div className="navbar bg-amber-50  sticky top-0 z-50 shadow-md px-10">
            <div className="navbar-start">

                <div >
                    <Link href="/">  <Image
                        src={logo}
                        alt="logo"
                        width={150}
                        height={100}
                        className="rounded-full object-cover"
                    /></Link>
                </div>

            </div>

            <div className="navbar-center ">
                <ul className="menu menu-horizontal px-1 text-xl text-neutral">

                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/explorecars">Explore Cars</NavLink></li>
                    


                </ul>
            </div>

            <div className="navbar-end flex  items-center gap-5">

                {/* <div className='flex items-center gap-3'>
                        <h2 className='text-xl font-bold flex items-center'>Hello, {user.name}</h2>
                        <Image src={user?.image && user.image.startsWith("http")
                            ? user.image
                            : avater} height={50} width={50} alt='avater' className='rounded-full' />
                        <Link href="/myprofile" className="text-xs btn btn-soft btn-primary">
                            My Profile
                        </Link>
                        <Link href="/">
                            <button className='btn btn-soft btn-primary' onClick={async () => await authClient.signOut()}>Logout</button>
                        </Link>

                    </div> */}



                <div>
                    <Link href="/login"> <button className='btn btn-soft btn-primary'>Login</button> </Link>

                    <Link href="/register"> <button className='btn btn-soft btn-primary'>Register</button> </Link>
                </div>



            </div>


        </div>
    );
};

export default NavBar;