"use client";


import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const UpdateProfile = () => {

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name:  "",
      photo: "",
    }
  });

  const handleUpdate = async (data) => {
    const { name, photo } = data;

    try {
      await authClient.updateUser({
        name:name,
        image: photo,
      });

      alert("Profile Updated Successfully ✅");

    } catch (error) {
      console.log(error);
      alert("Update Failed ");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <form
        onSubmit={handleSubmit(handleUpdate)}
        className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4"
      >

        <h2 className="text-2xl font-bold text-center">
          Update Profile
        </h2>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Name</legend>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("name", { required: true })}
            placeholder="Type here Name"
          />
          {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Photo URL</legend>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("photo", { required: true })}
          placeholder="Type here photo uRL" />
          {errors.photo && <p className="text-red-500 text-sm">Photo URL is required</p>}
        </fieldset>

        <button className="btn btn-primary w-full">
          Update Information
        </button>

      </form>

    </div>
  );
};

export default UpdateProfile;