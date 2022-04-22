import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);

    const url = `http://localhost:5000/service`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
      
    })
    .then(res => res.json())
    .then(result => {
      console.log(result);
    })
  };
  
  return (
    <div className="w-50 m-auto">
      <h2>Add Services</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
      <input className="mb-2" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" required />
      <textarea className="mb-2" {...register("description")}  placeholder="Description" required />
      <input className="mb-2" type="number" {...register("price")}  placeholder="Price" required />
      <input className="mb-2" type="text" {...register("img")}  placeholder="Photo" required />
      <input className="mb-2" type="submit" value='Add Service' />
    </form>
    </div>
  );
};

export default AddService;
