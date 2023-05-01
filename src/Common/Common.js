import React from 'react';
import img1 from '../assests/images/re1.png'
const Common = ({ title }) => {
    return (
        <div className='my-10'>
            <div className='relative before:absolute before:inset-0 before:bg-black before:bg-opacity-50 before:rounded-[20px]'>
                <img src={img1} alt="" className='w-full h-[250px] object-cover rounded-[20px]' />
                <div class="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white 
                text-center ">
                    <h1 class="text-4xl font-bold ">{title}</h1>

                </div>
            </div>
        </div>
    );
};

export default Common;