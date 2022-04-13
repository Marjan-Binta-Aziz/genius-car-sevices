import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword ,useSendPasswordResetEmail} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  //use for another way to get mail and pass like handleEmailBlur
  const emailRef = useRef("");
  const PasswordRef = useRef("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //for go to the registration page
  const navigate = useNavigate();

  //for login to firebase
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

  let errorElement;

  if (error) {
    errorElement = (
      <h5 className="text-danger m-4">Error: {error?.message} </h5>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = PasswordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = () => {
    navigate("/register");
  };

  const resetPassword = async() => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert('Sent email');
  };

  //condition for in user login
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="container w-50 text-center mx-auto pt-4 m-auto">
      <h2>Login Page</h2>
      <Form onSubmit={handleSubmit} className="text-start pt-3 w-50 m-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Email Address"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={PasswordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button
          className="m-auto w-50 rounded-pill d-block"
          variant="outline-dark"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      {errorElement}
      <p className="mt-4">
        New to Genius Car?{" "}
        <Link
          to="/register"
          onClick={navigateRegister}
          className="text-warning text-decoration-none"
        >
          Please Register
        </Link>
      </p>
      <p className="mt-4">
        Forget Password ?{" "}
        <Link
          to="/register"
          onClick={resetPassword}
          className="text-danger text-decoration-none"
        >
          Reset Password
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
