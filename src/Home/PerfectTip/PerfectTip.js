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
                    <h2 className='text-3xl font-semibold mt-[120px] '>My Reviews</h2>
                    <p >Search Flights & Places Hire to our most popular destinations</p>
                    <div className='grid grid-cols-3 gap-5 mt-[40px]'>
                        {
                            myrating?.map(pl => {
                                return (
                                    <div className=' space-y-4'>
                                        <div key={pl._id} className="flex items-center shadow-md rounded-md ">
                                            <img className='w-[90px] h-[90px] m-3 rounded-md' src={pl.image} alt="" />
                                            <div className="space-y-1 ml-2">

                                                <h2 className="text-[16px] font-semibold ">{pl.place}</h2>
                                                <StarRating rating={pl.ratings}></StarRating>
                                                <h2 className="text-[16px] font-medium">{pl.text}</h2>
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