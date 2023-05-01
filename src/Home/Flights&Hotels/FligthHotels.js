import React from 'react';
import img1 from '../../assests/images/re1.png'
import img2 from '../../assests/images/Rectangle 41.png'
import plane from '../../assests/svg/send-plane-fill.svg'

const FligthHotels = () => {
    return (
        <div className='grid grid-cols-2 gap-5 my-30'>
            <div className='relative before:absolute before:inset-0 before:bg-black before:bg-opacity-50 before:rounded-[20px]'>
                <img src={img1} alt="" />
                <div class="absolute top-[350px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white 
                text-center ">
                    <h1 class="text-4xl font-bold">Flights</h1>
                    <p class="mt-4 text-[16px]">Search Flights & Places Hire to our most popular destinations</p>

                    <button className="btn btn-success my-4"> <span className='mx-1'> <img height="16" width="16" src={plane} alt='' /></span> Flights</button>

                </div>
            </div>

            <div className='relative before:absolute before:inset-0 before:bg-black before:bg-opacity-50 before:rounded-[20px]'>
                <img src={img2} alt="" />
                <div class="absolute top-[350px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h1 class="text-4xl font-bold">Hotels</h1>
                    <p class="mt-4 text-[16px]">Search Flights & Places Hire to our most popular destinations</p>
                    <button className="btn btn-success my-4"> <span className='mx-1'> <img height="16" width="16" src={plane} alt='' /></span> Hotels</button>
                </div>
            </div>
        </div>
    );
};

export default FligthHotels;