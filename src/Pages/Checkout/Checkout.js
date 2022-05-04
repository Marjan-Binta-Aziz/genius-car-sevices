import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useServiceDetails from "../../hooks/useServiceDetails";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Checkout.css";
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);

  // ------------after place order navigate to all services page-------------------//
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/orders";
  // ----------------------------------------------------------//

  //optional
  /*  const [user, setUser] = useState({
        name: 'Akbar The Great',
        email: 'akbar@momo.taj',
        address: 'Tajmohol Road Md.pur',
        phone: '01711111111'
    });

    const handleAddressChange = event =>{
        console.log(event.target.value);
        const {address, ...rest} = user;
        const newAddress = event.target.value;
        const newUser = {address: newAddress, ...rest};
        console.log(newUser);
        setUser(newUser);
    } */

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      serviceId: serviceId,
      service: service.name,
      email: user.email,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };

    //get data by using axios
    axios
      .post("https://still-gorge-05300.herokuapp.com/order", order)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast("You'er Order is Booked", service.name);
          //clear input field
          event.target.reset();

          navigate(from, { replace: true });
        }
      });
  };

  return (
    <div className="container w-25 mx-auto pt-4 m-auto">
      <h2 className="form-title">Order Information {service.name}</h2>
      <div className="container checkout-container mt-3">
        <form onSubmit={handlePlaceOrder}>
          <input type="text" name="name" value={user?.displayName} placeholder="Your Name" required readOnly disabled
          />{" "}
          <br />
          <input type="email" name="email" value={user?.email} placeholder="email" required readOnly disabled
          />
          <br />
          <input type="text"  name="service" value={service.name} placeholder="Your Service" required readOnly disabled
          />
          <br />
          <input type="text" name="address" placeholder="Full Address" autoComplete="off" require />
          <br />
          <input type="text" name="phone" placeholder="Phone Number" required />
          <br />
          <button
            className="d-block w-50 m-auto btn btn-outline-dark mt-2 p-2 rounded-pill"
            type="submit"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
