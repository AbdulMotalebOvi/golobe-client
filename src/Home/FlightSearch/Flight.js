import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import locationImg from '../../assests/svg/map-pin-line.svg'
import people from '../../assests/svg/people.svg'
import search from '../../assests/svg/search-line.svg'
import { BASE_URL } from '../../BaseUrL/config';


const Flight = () => {
    const navigate = useNavigate()
    const locationRef = useRef("")
    const handlerToSubmit = async () => {
        const myLocation = locationRef.current.value
        const res = await fetch(`${BASE_URL}/placeName?place=${myLocation}`)

        const result = await res.json()

        if (result) {
            navigate(`/searchPlace?place=${myLocation}`, { state: { result, myLocation: myLocation } })
        }

    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-20 '>
            <form onSubmit={handlerToSubmit} className='flex flex-col lg:flex-row'>
                <div className='flex space-x-3 items-center w-full lg:w-auto'>
                    <div className='flex items-center relative'>
                        <span className='absolute inset-y-0 right-0 grid place-content-center px-4'>
                            <img height='15' width='15' src={locationImg} alt='' />
                        </span>
                        <input
                            type='text'
                            className='w-full rounded-lg border-solid outline-none border-4 border-gray-400  p-4 pr-12 text-sm placeholder-black shadow-lg focus:bg-white border-transparent focus:border-blue-400'
                            placeholder='Dhaka'
                        />
                    </div>
                    <div className='flex items-center relative'>
                        <span className='absolute inset-y-0 right-0 grid place-content-center px-4'>
                            <img height='15' width='15' src={locationImg} alt='' />
                        </span>
                        <input
                            ref={locationRef}
                            type='text'
                            name='where'
                            className='capitalize w-full rounded-lg border-solid outline-none border-4 border-gray-400  p-4 pr-12 text-sm placeholder-black shadow-lg focus:bg-white border-transparent focus:border-blue-400'
                            placeholder='To'
                        />
                    </div>
                    <div className='flex items-center relative'>
                        <span className='absolute inset-y-0 right-0 grid place-content-center px-4'>
                            <img height='15' width='15' src={people} alt='' />
                        </span>
                        <input
                            type='number'
                            name='people'
                            className='w-full rounded-lg border-solid outline-none border-4 border-gray-400  p-4 pr-12 text-sm placeholder-black shadow-lg focus:bg-white border-transparent focus:border-blue-400'
                            placeholder='Max People'
                        />
                    </div>
                </div>
                <div className='w-full lg:w-auto flex items-center justify-center lg:justify-start mt-4 lg:mt-0'>
                    <button
                        onClick={() => handlerToSubmit()}
                        className='bg-orange-300 p-4 ml-4 rounded-lg w-[60px]'
                    >
                        <img height='35' width='35' src={search} alt='' />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Flight;