import React, { useEffect, useState } from 'react';
import video1 from '../../assests/Videos/1hj.mp4'
import video2 from '../../assests/Videos/video.mp4'
import video3 from '../../assests/Videos/we.mp4'
import useTitle from '../../Hooks/useTitle';
import Flight from '../FlightSearch/Flight';

const Hero = () => {
    useTitle('Golobe Travels')

    return (
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 items-center my-20">
                <div>
                    <h3 class="max-w-md  text-xl text-orange-600 font-semibold">Helping Others</h3>
                    <div class="max-w-md ">
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Live &amp; Travel</h1>
                        <p class="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatum nulla pariatur voluptatibus reprehenderit enim, molestias fugit sapiente minima velit! Facere nesciunt blanditiis iure hic.</p>
                    </div>
                </div>

                <div className='hidden sm:flex items-center justify-between gap-3'>
                    <video className='w-[200px] rounded-2xl ' controls ><source src={video1} /></video>
                    <video className='w-[200px] rounded-2xl relative top-5' controls ><source src={video2} /></video>
                    <video className='w-[200px] rounded-2xl relative top-11' controls ><source src={video3} /></video>

                </div>
            </div>
        </div>
    );
};

export default Hero;