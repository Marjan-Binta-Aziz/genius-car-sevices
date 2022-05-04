import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useServices from "../../hooks/useServices";

const UpdateService = () => {
  const { _id } = useParams();
  const [service] = useServices({});
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const url = `https://still-gorge-05300.herokuapp.com/service/${_id}`;
    console.log(_id);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="w-50 text-center m-auto pt-4">
      <h2>Update Services {service.id}</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
          required
        />
        <textarea
          className="mb-2"
          {...register("description")}
          placeholder="Description"
          required
        />
        <input
          className="mb-2"
          type="number"
          {...register("price")}
          placeholder="Price"
          required
        />
        <input
          className="mb-2"
          type="text"
          {...register("img")}
          placeholder="Photo"
          required
        />
        <input
          className="mb-2 btn btn-outline-dark w-25 text-center"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default UpdateService;
