import React from 'react';

const Service = () => {
    return (
        <div className='grid grid-cols-4 gap-5 my-20'>
            <div>
                <h5 className='text-orange-600 font-semibold'>What we serve?</h5>
                <h2 className='text-black font-extrabold text-4xl '>We Offer Our Best Services</h2>
            </div>

            <div
                className="relative rounded-xl border border-gray-100 p-4 sm:p-6 lg:p-8"
            >

                <div className=' absolute after: content-[""] bg-orange-500  rounded-[100%] w-[60px]  top-[10px] h-[60px]'>
                    <span className=' relative text-white text-[40px] left-2'><i className="ri-sun-cloudy-line"></i></span>
                </div>
                <div className='relative mt-[70px]'>
                    <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl ">
                        Calculate Weather
                    </h3>

                    <p className="mt-2 hidden text-sm sm:block">
                        You can manage phone, email and chat conversations all from a single
                        mailbox.
                    </p>
                </div>
            </div>

            <div
                className="relative rounded-xl border border-gray-100 p-4 sm:p-6 lg:p-8"
            >

                <div className=' absolute after: content-[""] bg-orange-500  rounded-[100%] w-[60px]  top-[10px] h-[60px]'>
                    <span className=' relative text-white text-[40px] left-2'>
                        <i class="ri-compass-line"></i>
                    </span>
                </div>
                <div className='relative mt-[70px]'>
                    <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl ">
                        Best Tour Guide
                    </h3>

                    <p className="mt-2 hidden text-sm sm:block">
                        You can manage phone, email and chat conversations all from a single
                        mailbox.
                    </p>
                </div>
            </div>

            <div
                className="relative rounded-xl border border-gray-100 p-4 sm:p-6 lg:p-8"
            >

                <div className=' absolute after: content-[""] bg-orange-500  rounded-[100%] w-[60px]  top-[10px] h-[60px]'>
                    <span className=' relative text-white text-[40px] left-2'><i class="ri-folder-settings-line"></i></span>
                </div>
                <div className='relative mt-[70px]'>
                    <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl ">
                        Customization
                    </h3>

                    <p className="mt-2 hidden text-sm sm:block">
                        You can manage phone, email and chat conversations all from a single
                        mailbox.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Service;