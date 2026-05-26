import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  const bookings = await res.json();

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        My Bookings
      </h1>

      {bookings.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">
          No bookings found
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">

          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="border rounded-2xl shadow-md p-4 flex flex-col md:flex-row gap-4 bg-white hover:shadow-xl transition"
            >

              {/* IMAGE */}
              <Image
                src={booking.imageUrl}
                alt={booking.carName}
                width={250}
                height={180}
                className="rounded-xl object-cover w-full md:w-[200px] h-[150px]"
              />

              {/* DETAILS */}
              <div className="flex-1 space-y-2">

                <h2 className="text-xl font-bold text-gray-800">
                  {booking.carName}
                </h2>

                <p className="text-sm text-gray-500">
                  Type: <span className="font-medium">{booking.carType}</span>
                </p>

                <p className="text-sm text-gray-500">
                  Booking Date:{" "}
                  <span className="font-medium text-black">
                    {new Date(booking.bookingDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </p>

                <p className="text-sm text-gray-500">
                  Driver:{" "}
                  <span className="font-medium">{booking.driverNeeded}</span>
                </p>

                <p className="text-sm text-gray-500">
                  Note: {booking.specialNote}
                </p>

                <p className="text-lg font-bold text-cyan-600">
                  ${booking.rentPrice}
                </p>

                <p className="text-xs text-gray-400">
                  Booking ID: {booking._id}
                </p>

<div>
  
</div>

                {/* CANCEL BUTTON */}
                <div className="pt-2">
                  <BookingCancelAlert bookingId={booking._id} />
                </div>

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default MyBookingPage;