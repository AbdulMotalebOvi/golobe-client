import React from 'react';
import { BASE_URL } from '../BaseUrL/config';
import Common from '../Common/Common';
import Flight from '../Home/FlightSearch/Flight';
import useFetch from '../Hooks/useFetch';
import notFound from '../assests/images/not found.png'
import locationImg from '../assests/svg/map-pin-line.svg'
import { Link } from 'react-router-dom';


const AllTours = () => {
    const { data } = useFetch(`${BASE_URL}/places`)
    return (
        <div>
            <Common title="Get All Tours Places"></Common>
            <div>
                <Flight></Flight>
            </div>
            <div className='grid grid-cols-4 gap-5 my-20 '>
                {
                    data?.map(pl =>
                        <div key={pl._id} className="card w-[290px] border overflow-x-auto">
                            <figure className='object-center'>
                                {pl.image_url ?
                                    <img src={pl.image_url} alt="" />
                                    :
                                    <img src={notFound} alt="" />
                                }
                            </figure>
                            <div className="card-body px-4 py-2">
                                <Link className='flex items-center text-orange-500 cursor-pointer'>
                                    <img className='w-[15px]' src={locationImg} alt="" />
                                    <p className="text-[16px] font-semibold mb-0">{pl.place}</p>
                                </Link>
                                <h2 className="card-title text-3xl">{pl.country}</h2>

                                <div className='flex justify-between items-center'>
                                    <p className='text-[14px]'><span className='text-orange-500 font-semibold text-[18px]'>${pl.ticket_price}</span> /per person</p>

                                    {
                                        <Link to={`/GolobeSecurity/tours/${pl._id}`} className="btn  bg-[#8DD3BB]  text-white border-none my-5 hover:bg-[#03f8a2]">See More</Link>
                                    }

                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div >
    );
};

export default AllTours;