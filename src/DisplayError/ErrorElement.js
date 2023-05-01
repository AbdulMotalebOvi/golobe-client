import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from '../Animations/error.json'
import { AuthContext } from '../UseContext/AuthUseContext';
import { toast } from 'react-hot-toast';


const ErrorElement = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    const { logOut } = useContext(AuthContext)
    const handlerToLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Sign Out Successful')
                navigate('/')
            })
            .catch(() => { })
    }
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='text-center'>
                <Lottie className='w-3/12 m-auto' animationData={animation} loop={true} />
                <p className='text-red-500'>Oops! Something went wrong!!</p>
                <p className='text-red-400'>
                    <i>{error.statusText || error.message}</i>
                </p>
                <h2 className='btn btn-primary text-white my-2'> <Link onClick={() => handlerToLogOut()}>Sign Out</Link></h2>
            </div>

        </div>
    );
};

export default ErrorElement;