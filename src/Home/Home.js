import React from 'react';
import FligthHotels from './Flights&Hotels/FligthHotels';

import Flight from './FlightSearch/Flight';
import Hero from './Hero/Hero';
import PerfectTip from './PerfectTip/PerfectTip';
import Service from './Services/Service';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Flight></Flight>
            <Service></Service>
            <PerfectTip></PerfectTip>
            <FligthHotels></FligthHotels>
        </>
    );
};

export default Home;