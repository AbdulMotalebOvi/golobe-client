import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

import NavBar from '../NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;