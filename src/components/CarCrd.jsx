import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CarCrd = ({ car }) => {
    const { _id, imageUrl, carName, rentPrice, carType, availabil } = car;

    return (
        <div className="group relative overflow-hidden rounded-2xl 
        bg-white shadow-md border border-gray-200
        transition-all duration-500 ease-in-out
        hover:-translate-y-3 hover:shadow-2xl hover:border-cyan-400">

            {/* Image */}
            <figure className="overflow-hidden">
                <Image
                    className="w-full h-[250px] object-cover 
                    transition-transform duration-700 
                    group-hover:scale-110"
                    alt={carName}
                    src={imageUrl}
                    height={400}
                    width={400}
                />
            </figure>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t 
            from-black/10 to-transparent opacity-0 
            group-hover:opacity-100 transition duration-500"></div>

            {/* Card Body */}
            <div className="card-body relative z-10 p-5">
                <div className='flex justify-between items-center'>
                    <h2 className="text-xl font-bold text-gray-800">
                        {carName}
                    </h2>

                    <span className={`px-3 py-1 rounded-full text-sm font-medium
                    ${availabil === "Available"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}>
                        {availabil}
                    </span>
                </div>

                <p className='text-gray-500'>
                    Type: {carType}
                </p>

                <div className="flex justify-between items-center mt-4">
                    <h1 className='text-2xl font-bold text-cyan-600'>
                        $ {rentPrice}
                        <span className='text-sm text-gray-400'>
                            / Day
                        </span>
                    </h1>

                    <Link href={`/explorecars/${_id}`}>
                        <Button
                            variant="ghost"
                            className="transition-all duration-300
                            group-hover:bg-cyan-500
                            group-hover:text-white"
                        >
                            Book Now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CarCrd;