"use client";

import { Button, Card, FieldError, Input, TextField } from "@heroui/react";
import React, { useState } from "react";
import { DateField, Label } from "@heroui/react";
// import { FieldError, Input, Label, TextField, Button, Card } from "@heroui/react";
// import { authClient } from "@/lib/auth-client";
// import toast from "react-hot-toast";

const BookingCard = ({ cars }) => {

  // const { data: session } = authClient.useSession();
  // const user = session?.user;
  // const [departureDate, setDepartureDate] = useState(null);


  const { _id, imageUrl, carName, rentPrice, carType, capacity } = cars;

  const handleBooking = async (e) => {
    e.preventDefault();
     const form = e.target;
    const driverNeeded = form.driverNeeded.value;
    const specialNote = form.specialNote.value;

    const bookingData = {
      // userId: user?.id,
      // userImage: user?.image,
      // userName: user?.name,
      carBookibgId: _id,
      carName,
      carType,
      rentPrice,
      imageUrl,
      capacity,
      driverNeeded,
      specialNote

    }
  


    // const {data:tokenData} = await authClient.token()

    const res = await fetch('http://localhost:5000/booking', {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        // authorization: `Bearer ${tokenData?.token}`
      },
      body: JSON.stringify(bookingData),
    })


    const data = await res.json();
    console.log(data);
    

    // toast.success("You booked successfully!")

  }



  return (
    <Card className="rounded-none border mt-5">


      {/* <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField> */}

      <form
        onSubmit={handleBooking}
        className="p-10 space-y-8 w-3xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TextField name="driverNeeded" isRequired>
            <Label>Driver Needed</Label>
            <Input placeholder="Yes/No" className="rounded-2xl" />
            <FieldError />
          </TextField>

          <TextField name="specialNote" isRequired>
            <Label>Special Note</Label>
            <Input placeholder="Special Note" className="rounded-2xl" />
            <FieldError />
          </TextField>

        </div>

        {/* Buttons */}

        {/* <Button onClick={handleBooking} className={"w-full rounded-none bg-cyan-500"}>Book Now</Button> */}
        <Button
          type="submit"
          variant="outline"
          className=" rounded-none w-full bg-cyan-500 text-white"
        >
          Book Now
        </Button>

      </form>

    </Card>
  );
};

export default BookingCard;
