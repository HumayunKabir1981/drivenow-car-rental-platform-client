import BookingCard from "@/components/BookingCard";
import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import Image from "next/image";

export default async function CarDetailPage({ params }) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/addcar/${id}`,
    // { headers: {
    //   authorization: `Bearer ${token}`
    // }}
  );


  const car = await res.json();

  const {
    _id,
    imageUrl,
    carName,
    rentPrice,
    carType,
    availabil,
    description,
    capacity,
  } = car;

  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="flex items-center gap-3 justify-end mt-5 mb-3">
        <EditModal car={car} />
        <DeleteAlert car={car} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-6">

        {/* IMAGE */}
        <div className="flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={carName}
            width={600}
            height={500}
            className="rounded-2xl object-cover w-full h-[400px]"
          />
        </div>

        {/* DETAILS */}
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
              <p className="text-gray-500">Availability</p>
              <p className="font-semibold">{availabil}</p>
            </div>

          </div>

          {/* BOOKING */}
          <BookingCard cars={car} />

        </div>
      </div>
    </div>
  );
}