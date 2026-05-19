


import NavBar from '@/components/NavBar';
import React from 'react';

const AuthLayoyt = ({ children }) => {
    return (
        <div>

           <div className="sticky top-0 z-50 bg-white shadow-md">
                <NavBar />
            </div>
            

            {children}
        </div>
    );
};

export default AuthLayoyt;