import React from 'react';
import img1 from '../assests/images/re1.png'
const Common = ({ title }) => {
    return (
        <div className='my-10'>
            <div className='relative'>
                <img src={img1} alt="" className='w-full h-[250px] object-cover rounded-[20px]' />
                <div className='absolute inset-0 bg-black bg-opacity-50 rounded-[20px] flex items-center justify-center'>
                    <h1 className='text-4xl font-bold text-white'>{title}</h1>
                </div>
            </div>
        </div>

    );
};

export default Common;