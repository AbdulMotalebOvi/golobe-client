import React, { useEffect, useState } from 'react';
import video1 from '../../assests/Videos/1hj.mp4'
import video2 from '../../assests/Videos/video.mp4'
import video3 from '../../assests/Videos/we.mp4'
import useTitle from '../../Hooks/useTitle';
import Flight from '../FlightSearch/Flight';

const Hero = () => {
    useTitle('Golobe Travels')

    return (
        <div className='grid grid-cols-2 items-center my-20'>
            <div>
                <h3 className="text-xl text-orange-600 font-semibold">Helping Others</h3>
                <h1 className='text-[40px]'>Live & Travel</h1>
                <p className='text-[15px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo voluptatum nulla pariatur voluptatibus reprehenderit enim, molestias fugit sapiente minima velit! Facere nesciunt blanditiis iure hic.</p>


            </div>
            < div className=''>
                <div className='flex items-center justify-between gap-3'>
                    <video className='w-[200px] rounded-2xl ' controls ><source src={video1} /></video>
                    <video className='w-[200px] rounded-2xl relative top-5' controls ><source src={video2} /></video>
                    <video className='w-[200px] rounded-2xl relative top-11' controls ><source src={video3} /></video>

                </div>
            </div>
        </div>
    );
};

export default Hero;