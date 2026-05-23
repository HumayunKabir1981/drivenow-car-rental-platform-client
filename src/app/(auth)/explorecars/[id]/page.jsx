

import BookingCard from "@/components/BookingCard";
import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import Image from "next/image";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

export default async function CarDetailPage({ params }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/addcar/${id}`);
  const cars = await res.json();

  const { _id, imageUrl, carName, rentPrice, carType, availabil, description, capacity } = cars;

  // const car = cars.find(
  //   (a) => String(a.id) === String(id)
  // );

  // if (!car) {
  //   return <div>Cars not found</div>;
  // }



  return (

    <div className="max-w-6xl mx-auto p-6">

      <div className="flex  items-center gap-3 justify-end mt-5 mb-3">
        <EditModal  car={cars} />
        <DeleteAlert car={cars} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-6">


        <div className="flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={carName}
            width={600}
            height={500}
            className="rounded-2xl object-cover w-full h-[400px]"
          />
        </div>


        <div className="flex flex-col justify-center space-y-4">

          <h1 className="text-3xl font-bold text-gray-800">
            {carName}
          </h1>

          <p className="text-gray-500">
            {description}
          </p>

          <div className="grid grid-cols-2 gap-3 text-sm">

            <div className="p-3 bg-gray-100 rounded-lg">
              <p className="text-gray-500">Type</p>
              <p className="font-semibold">{carType}</p>
            </div>

            <div className="p-3 bg-gray-100 rounded-lg">
              <p className="text-gray-500">Rent Price</p>
              <p className="font-semibold">${rentPrice}/Day</p>
            </div>

            <div className="p-3 bg-gray-100 rounded-lg">
              <p className="text-gray-500">Capacity</p>
              <p className="font-semibold">{capacity} Seats</p>
            </div>

            <div className="p-3 bg-gray-100 rounded-lg">
              <p className="text-gray-500">Availabil</p>
              <p className="font-semibold">{availabil}</p>
            </div>


          </div>




          <BookingCard cars={cars} />



        </div>
      </div>
    </div>


  );
}