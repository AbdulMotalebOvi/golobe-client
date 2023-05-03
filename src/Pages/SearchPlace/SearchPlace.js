import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Common from '../../Common/Common';
import locationImg from '../../assests/svg/map-pin-line.svg'
import useTitle from '../../Hooks/useTitle';




const SearchPlace = () => {
    useTitle('SearchPlace')
    const location = useLocation()
    const { result } = location.state;
    return (
        <div className='space-y-6'>
            <Common title='Your Search Places Result'></Common>
            <div className='grid grid-cols-4 gap-3'>
                {result.map(rs => <div key={rs._id} className="card w-[290px] border overflow-x-auto">
                    <figure className='object-center'>

                        <img src={rs.image_url} alt="" />

                    </figure>
                    <div className="card-body px-4 py-2">
                        <div className='flex items-center text-orange-500 cursor-pointer'>
                            <img className='w-[15px]' src={locationImg} alt="" />
                            <p className="text-[16px] font-semibold mb-0">{rs.place}</p>
                        </div>
                        <h2 className="card-title text-3xl">{rs.country}</h2>

                        <div className='flex justify-between items-center'>
                            <p className='text-[14px]'><span className='text-orange-500 font-semibold text-[18px]'>${rs.ticket_price}</span> /per person</p>

                            <Link to={`/GolobeSecurity/tours/${rs._id}`} className="btn  bg-[#8DD3BB]  text-white border-none my-5 hover:bg-[#03f8a2]">Buy Now</Link>

                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default SearchPlace;