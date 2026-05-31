"use client";

import {
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
  Card,
} from "@heroui/react";

import { useState } from "react";
import toast from "react-hot-toast";

const AddCarPage = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const addcar = Object.fromEntries(formData.entries());

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/addcar`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addcar),
        }
      );

      if (!res.ok) throw new Error("Failed");

      await res.json();

      toast.success("🚗 Car added successfully!");

      e.target.reset();
    } catch (err) {
      console.log(err);
      toast.error("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Add New Car
          </h1>
          <p className="text-gray-500 text-sm">
            Fill all required information to list a new car
          </p>
        </div>

        {/* CARD */}
        <Card className="shadow-xl rounded-2xl">
          <form onSubmit={onSubmit} className="p-6 space-y-6">

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Car Name */}
              <div className="md:col-span-2">
                <TextField name="carName" isRequired>
                  <Label>Car Name</Label>
                  <Input placeholder="Toyota Corolla" />
                  <FieldError />
                </TextField>
              </div>

              {/* Price */}
              <TextField name="rentPrice" isRequired>
                <Label>Daily Rent Price ($)</Label>
                <Input placeholder="100" />
                <FieldError />
              </TextField>

              {/* Type */}
              <div>
                <Label>Car Type</Label>
                <Select name="carType" isRequired>
                  <Select.Trigger>
                    <Select.Value placeholder="Select type" />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="SUV">SUV</ListBox.Item>
                      <ListBox.Item id="Sedan">Sedan</ListBox.Item>
                      <ListBox.Item id="Hatchback">Hatchback</ListBox.Item>
                      <ListBox.Item id="Luxury">Luxury</ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Image */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input placeholder="https://..." />
                  <FieldError />
                </TextField>
              </div>

              {/* Capacity */}
              <TextField name="capacity" isRequired>
                <Label>Seat Capacity</Label>
                <Input placeholder="4 / 6 / 10" />
                <FieldError />
              </TextField>

              {/* Pickup */}
              <TextField name="pickup" isRequired>
                <Label>Pickup Location</Label>
                <Input placeholder="Dhaka / Airport" />
                <FieldError />
              </TextField>

              {/* Availability */}
              <TextField name="availabil" isRequired>
                <Label>Availability</Label>
                <Input placeholder="Available / Not Available" />
                <FieldError />
              </TextField>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea placeholder="Car details..." />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* BUTTON */}
            <Button
              type="submit"
              disabled={loading}
              className={`w-full text-white py-3 rounded-xl font-semibold transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-cyan-500 hover:bg-cyan-600"
              }`}
            >
              {loading ? "Adding Car..." : "Add Car"}
            </Button>

          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddCarPage;