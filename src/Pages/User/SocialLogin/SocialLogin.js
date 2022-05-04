import React from "react";
import auth from "../../../firebase.init";
import google from "../../../images/Social/google.png";
import facebook from "../../../images/Social/facebook.png";
import github from "../../../images/Social/github.png";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();
  let errorElement;

  if (loading || loading1) {
    return <Spinner animation="grow" variant="dark" />;
  }

  if (error || error1) {
    errorElement = (
      <h5 className="text-danger">
        Error: {error?.message} {error1?.message}
      </h5>
    );
  }
  if (user || user1) {
    navigate(from, { replace: true });
  }

  return (
    <div className="mt-2">
      <div className="d-flex align-items-center">
        <div className="bg-dark w-50" style={{ height: "1px" }}></div>
        <p className="mt-2 p-2">or</p>
        <div className="bg-dark w-50" style={{ height: "1px" }}></div>
      </div>
      {errorElement}
      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline-dark w-50 d-block m-auto my-2 rounded-pill"
        >
          <img src={google} alt="" srcSet="" />
          <span className="px-2">Sign up with Google</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-outline-dark w-50 d-block m-auto my-2 rounded-pill"
        >
          <img src={facebook} alt="" srcSet="" />
          <span className="px-2">Sign up with Facebook</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-outline-dark w-50 d-block m-auto my-2 rounded-pill"
        >
          <img src={github} alt="" srcSet="" />
          <span className="px-2">Sign up with Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
