import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    // for verify email
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    
    // loading for when I reload the place order page its go to the login page, for prevent it use loading

    // loading condition should be before user condition
    
    if(loading){
            return <Loading></Loading>
        }

    // user thakle
    if (!user) {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }

    // user er email varifier na thakle
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div>
            <h3>Your Email is not verified</h3>
            <h4>Please Verify your email address</h4>
            <button className='btn btn-outline-dark'
                onClick={async () => {
                await sendEmailVerification();
                toast('Sent email');
                }}>
                    Send Verification Email Again
            </button>
            
        </div>
    } 

    

    return children;
};

export default RequireAuth;