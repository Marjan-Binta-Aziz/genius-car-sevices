import React from "react";
import { Link } from "react-router-dom";
import useServices from "../../hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure want to delete?");
    if (proceed) {
      const url = `https://still-gorge-05300.herokuapp.com/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          // delete korar pore jeno oita baad e baki gulo k dekhay
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div className="pt-4">
      <h2>Manage Services</h2>
      {
      services.map((service) => (
        <div key={service._id}>
          <p>
            {service.name} {""}
            <button
              onClick={() => handleDelete(service._id)}
              className="btn btn-outline-dark"
            >
              Delete
            </button>{" "}
            {""}
            <Link to="/update">
              <button className="btn btn-outline-dark">Update</button>
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
