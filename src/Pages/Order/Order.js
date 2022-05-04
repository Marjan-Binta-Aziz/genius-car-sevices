import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Order = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `https://still-gorge-05300.herokuapp.com/order?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);
  return (
    <div className="m-4">
      <h2 className="m-0 p-2 text-decoration-underline">Your Total Order: {orders.length}</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Order Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone No</th>
                    <th>Action</th>
                    </tr>
                    </thead>
                {
                orders.map(order =>
                    <tbody key={order._id}>
                    <tr>
                    <td>{order.service}</td>
                    <td>{order.email} </td>
                    <td>{order.address}</td>
                    <td>{order.phone}</td>
                    <td><button>Delete</button></td>
                    </tr>
                    </tbody>)
            } 
        </Table>
    </div>
  );
};

export default Order;
