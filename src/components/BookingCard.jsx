"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  Input,
  TextField,
  Label,
  FieldError,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const BookingCard = ({ cars }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [bookingDate, setBookingDate] = useState("");

  const { _id, imageUrl, carName, rentPrice, carType, capacity } = cars;

  const handleBooking = async (e) => {
    e.preventDefault();

    const form = e.target;
    const driverNeeded = form.driverNeeded.value;
    const specialNote = form.specialNote.value;

    if (!bookingDate) {
      toast.error("Please select a booking date");
      return;
    }

    const bookingData = {
      userId: user?.id,
      userName: user?.name,
      userImage: user?.image,

      carBookingId: _id,
      carName,
      carType,
      rentPrice,
      imageUrl,
      capacity,

      bookingDate,
      driverNeeded,
      specialNote,
    };

    const res = await fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();

    if (data?.insertedId || data?.success) {
      toast.success("Car booked successfully!");
      form.reset();
      setBookingDate("");
    } else {
      toast.error("Booking failed!");
    }
  };

  return (
    <Card className="mt-6 p-6 rounded-2xl shadow-lg ">

      {/* TITLE */}
      <h2 className="text-xl font-bold mb-4 text-center">
        Book This Car
      </h2>

      <form onSubmit={handleBooking} className="space-y-5">

        {/* BOOKING DATE */}
        <div>
          <label className="text-sm font-medium">
            Booking Date
          </label>

          <input
            type="date"
            className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            required
          />
        </div>

        {/* DRIVER */}
        <TextField name="driverNeeded" isRequired>
          <Label>Driver Needed</Label>
          <Input
            placeholder="Yes / No"
            className="rounded-xl"
          />
          <FieldError />
        </TextField>

        {/* NOTE */}
        <TextField name="specialNote" isRequired>
          <Label>Special Note</Label>
          <Input
            placeholder="Write your note..."
            className="rounded-xl"
          />
          <FieldError />
        </TextField>

        {/* BUTTON */}
        <Button
          type="submit"
          className="w-full bg-cyan-500 text-white rounded-xl py-3 font-semibold hover:bg-cyan-600 transition"
        >
          Book Now
        </Button>

      </form>
    </Card>
  );
};

export default BookingCard;