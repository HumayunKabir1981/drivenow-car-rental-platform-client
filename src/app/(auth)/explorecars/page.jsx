import CarCrd from '@/components/CarCrd';
import React from 'react';

const ExploreCarsPage = async() => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`)
    const res = await fetch('http://localhost:5000/addcar')
    const cars = await res.json() 
       


    return (
        <div className="max-w-7xl mx-auto">
            <h1>All Cars</h1>
            <div>
              
            </div>


            <div className="grid grid-cols-4 gap-5">
                {
                    cars.map(car => <CarCrd key={car._id} car={car}/>)
                }

            </div>

        </div>
    )
};

export default ExploreCarsPage;