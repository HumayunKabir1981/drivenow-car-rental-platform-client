import CarCrd from "@/components/CarCrd";
import Image from "next/image";

export default async function Home() {
   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addcar`)
    const cars = await res.json() 
  return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 container mx-auto mt-10">
                {
                    cars.slice(0, 4).map(car => <CarCrd key={car._id} car={car}/>)
                }

            </div>
  );
}
