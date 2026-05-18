import React from 'react';
import hero from '@/assets/banner.png'
import Image from 'next/image';

const HeroBanner = () => {
    return (
        <div className="w-full">
            <div className="w-full">
                <Image
                    src={hero}
                    alt="banner"
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>


        </div>
    );
};

export default HeroBanner;