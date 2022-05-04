import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword,useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import { Spinner } from 'react-bootstrap';

const Register = () => {
    const [agree, setAgree] = useState(false);

      //for go to ager page jekhan theke ai page e aschilo
        const navigate = useNavigate();
        const location = useLocation();
        const from = location.state?.from?.pathname || "/";


    //update user name
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigateLogin = () =>{
        navigate('/login');
    }

    const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});


        //control submission time page reload
    const handleRegistrationSubmit = async(event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    if (loading || updating) {
        return  <Spinner animation="grow" variant="dark" />

        }
        if(user){
            navigate(from, { replace: true });
        }

    return (
        <div className='pt-3 w-50 m-auto'>
            <h2>Registration</h2>
            <form onSubmit={handleRegistrationSubmit} className='container register-form mt-3'>                
                <input type="text" name="name" id="" placeholder='Your Name' required/>
                <br />
            
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <br />

                <input type="password" name="password" id="" placeholder='Password' required />
                <br />
                <input onClick={() => setAgree(!agree)} className='mx-2' type="checkbox" name="terms" id="" />
                <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms"><small>Accept Genius Terms and Conditions</small></label>

                <button className='d-block w-50 m-auto btn btn-outline-dark mt-2' disabled={!agree} type="submit" >Register</button>

                
            </form>
            <p className='pt-3'>Already Registered? <Link to='/login' onClick={navigateLogin}  className="text-warning text-decoration-none">Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;