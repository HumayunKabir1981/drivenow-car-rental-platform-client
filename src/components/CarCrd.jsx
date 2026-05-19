import Image from 'next/image';
import React from 'react';

const CarCrd = ({ car }) => {
    const { _id, imageUrl, carName, rentPrice, carType, availabil } = car;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <Image
                    className=""
                    alt={carName}
                    src={imageUrl}
                    height={400}
                    width={400}
                />
            </figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="card-title">{carName}</h2>
                    <h2 className='text-red-500 font-bold'>{availabil}</h2>
                </div>

                <p>Type: {carType}</p>
                <div className="card-actions flex justify-between">
                    <h1 className='text-xl font-bold'>$ {rentPrice}/ Day</h1>
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default CarCrd;