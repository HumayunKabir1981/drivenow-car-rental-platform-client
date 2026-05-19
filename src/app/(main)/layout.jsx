

import HeroBanner from '@/components/HeroBanner';
import NavBar from '@/components/NavBar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div>

            <div className="sticky top-0 z-50 bg-white shadow-md">
                <NavBar />
            </div>
            
            <div>
                <HeroBanner/>
            </div>

            {children}

            <div>
                
            </div>
        </div>
    );
};

export default MainLayout;