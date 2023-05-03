import React, { useContext } from 'react';
import { BASE_URL } from '../../BaseUrL/config';
import useFetch from '../../Hooks/useFetch';
import { AuthContext } from '../../UseContext/AuthUseContext';
import StarRating from '../../SinglePlaceDetails/StarRating';

const PerfectTip = () => {
    const { user } = useContext(AuthContext)

    const { data: myrating } = useFetch(`${BASE_URL}/mycomment?email=${user?.email}`)

    return (
        <>
            {
                user?.email &&
                <div className='my-20'>
                    <h2 className='text-3xl font-semibold mt-[120px] sm:mt-[80px]'>My Reviews</h2>
                    <p className="text-sm mt-4 sm:mt-0">Search Flights & Places Hire to our most popular destinations</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-[40px]'>
                        {
                            myrating?.map(pl => {
                                return (
                                    <div className=' space-y-4' key={pl._id}>
                                        <div className="flex items-center shadow-md rounded-md ">
                                            <img className='w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] m-3 rounded-md' src={pl.image} alt="" />
                                            <div className="space-y-1 ml-2">

                                                <h2 className="text-[16px] font-semibold sm:text-lg">{pl.place}</h2>
                                                <StarRating rating={pl.ratings}></StarRating>
                                                <h2 className="text-[16px] font-medium sm:text-lg">{pl.text}</h2>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>

            }
        </>
    );
};

export default PerfectTip;