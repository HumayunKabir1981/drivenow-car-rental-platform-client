"use client"

import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from "@heroui/react";

const AddCarPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const addcar = Object.fromEntries(formData.entries())
        

        // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addcar`, {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addcar)
        })
        const data = await res.json()
        console.log(data);

    }


    return (
        <div className="p-5 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold">Add Cars</h1>

            <Card>
                <form
                    onSubmit={onSubmit}
                    className="p-10 space-y-8 w-3xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Car Name */}
                        <div className="md:col-span-2">
                            <TextField name="carName" isRequired>
                                <Label>Car Name</Label>
                                <Input placeholder="Car Name" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Daily Rent Price */}
                        <TextField name="rentPrice" isRequired>
                            <Label>Daily Rent Price</Label>
                            <Input placeholder="$100" className="rounded-2xl" />
                            <FieldError />
                        </TextField>

                        {/* Category - Car Type */}
                        <div>
                            <Select
                                name="carType"
                                isRequired
                                className="w-full"
                                placeholder="Select category"
                            >
                                <Label>Car Type</Label>
                                <Select.Trigger className="rounded-2xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="SUV" textValue="SUV">
                                            SUV
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Sedan" textValue="Sedan ">
                                            Sedan
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Hatchback " textValue="Hatchback ">
                                            Hatchback
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Luxury " textValue="Luxury ">
                                            Luxury
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>


                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Image URL - Removed preview */}
                        <div className="md:col-span-2">
                            <TextField name="imageUrl" isRequired>
                                <Label>Image URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/bali-paradise.jpg"
                                    className="rounded-2xl"
                                />
                                <FieldError />
                            </TextField>
                        </div>


                        {/* Seat Capacity */}
                        <TextField name="capacity" isRequired>
                            <Label>Seat Capacity</Label>
                            <Input
                                placeholder="4 / 6 /10"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>

                        {/* Pickup Location */}
                        <TextField name="pickup" isRequired>
                            <Label>Pickup Location</Label>
                            <Input
                                placeholder="123 abc street"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label>Description</Label>
                                <TextArea
                                    placeholder="Describe the Car Detail."
                                    className="rounded-3xl"
                                />
                                <FieldError />
                            </TextField>
                        </div>

                         {/* Availability Status */}
                        <TextField name="availabil" isRequired>
                            <Label>Availability Status</Label>
                            <Input
                                placeholder="Availabil"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>


                    </div>

                    {/* Buttons */}

                    <Button
                        type="submit"
                        variant="outline"
                        className=" rounded-none w-full bg-cyan-500 text-white"
                    >
                        Add Car
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddCarPage;