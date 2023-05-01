import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assests/Logo/Logo.png'
import Footer from '../Footer/Footer';

const LayoutAnother = () => {
    return (
        <>
            <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  print:hidden'>
                <Link to='/'> <img className='w-[110px] h-[36px] my-5' src={logo} alt="" /></Link>
            </div>
            <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default LayoutAnother;