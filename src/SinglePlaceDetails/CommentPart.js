import React, { useState } from 'react';
import locationImg from '../assests/svg/map-pin-line.svg'
import StarRating from './StarRating';
import { BASE_URL } from '../BaseUrL/config';

const CommentPart = ({ cmtpart }) => {
    const [review, setReview] = useState('')
    fetch(`${BASE_URL}/mycomment/${cmtpart}`)
        .then(res => res.json())
        .then(data => setReview(data))
    const { ratings, image, place, country, text } = review
    const myRating = parseFloat(ratings)

    return (
        <div className="text-left m-2 space-y-2  bg-base-100 mt-10  border rounded p-3   w-96">

            <figure>

                <img className=' w-[50px] h-[50px] rounded-full ' src={image} alt='' />

            </figure>
            <StarRating rating={myRating}></StarRating>

            <div className='flex items-center  text-orange-500 '>
                <img className='w-[15px]' src={locationImg} alt="" />
                <p className="text-[16px] font-semibold mb-0">{place} , </p>
                <h2 className=" text-[20px] text-black ml-1">{country}</h2>
            </div>
            <p>{text}</p>

        </div>

    );
};

export default CommentPart;