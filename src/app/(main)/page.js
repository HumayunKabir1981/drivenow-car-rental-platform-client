import CarCrd from "@/components/CarCrd";
import Image from "next/image";

export default async function Home() {
   const res = await fetch('http://localhost:5000/addcar')
    const cars = await res.json() 
  return (
      <div className="grid grid-cols-4 gap-5 container mx-auto mt-10">
                {
                    cars.slice(0, 4).map(car => <CarCrd key={car._id} car={car}/>)
                }

            </div>
  );
}
