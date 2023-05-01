import React, { useContext, useState } from 'react';
import { AuthContext } from '../UseContext/AuthUseContext';
import { BASE_URL } from '../BaseUrL/config';
import { toast } from 'react-hot-toast';
import CommentPart from './CommentPart';


const ReviewPartr = ({ data }) => {
    const { user } = useContext(AuthContext)
    const { place, country, image_url, } = data
    const [rating, setRating] = useState(null);
    const [cmtpart, setCmtPart] = useState('')
    const [cmnt, setCmnt] = useState()

    function handleRadioChange(event) {
        setRating(event.target.value);
    }
    const handlerToComment = (e) => {
        e.preventDefault()
        const commentPart = e.target.text.value
        const comment = {
            ratings: rating,
            email: user?.email,
            text: commentPart,
            place,
            country,
            image: image_url

        }

        fetch(`${BASE_URL}/comment`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                if (!data.acknowledged) {
                    toast.error(data?.message)
                } else {
                    toast.success(`Thanks For your Valuable feedback about ${place}`)
                    setCmnt(data)
                    setCmtPart(data?.insertedId)
                }
            })
    }


    return (
        <div className="mx-auto max-w-lg px-4  lg:px-8">
            <div className="flex items-center my-5">
                <span className="h-10 w-10 rounded-full bg-blue-900"></span>
                <h2 className="ml-4 font-semibold text-3xl">{place}</h2>
            </div>

            <div className="m-auto  card  bg-base-100 ">
                <figure className=' p-4 '><img className='rounded-xl w-auto' src={image_url} alt="Album" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{country}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quisquam eaque nobis accusantium nihil assumenda.</p>

                </div>


            </div>
            <div className=' bg-base-100 mt-10  border rounded p-3 space-y-5'>
                <h1 className='text-xl font-semibold'>Reviews</h1>

                <form onSubmit={handlerToComment}>
                    <div className="rating rating-md space-x-3">
                        <input type="radio" value="1" onChange={handleRadioChange} className="mask mask-star-2 bg-orange-400" checked={rating === '1'} />
                        <input type="radio" value="2" onChange={handleRadioChange} className="mask mask-star-2 bg-orange-400" checked={rating === '2'} />
                        <input type="radio" value="3" onChange={handleRadioChange} className="mask mask-star-2 bg-orange-400" checked={rating === '3'} />
                        <input type="radio" value="4" onChange={handleRadioChange} className="mask mask-star-2 bg-orange-400" checked={rating === '4'} />
                        <input type="radio" value="5" onChange={handleRadioChange} className="mask mask-star-2 bg-orange-400" checked={rating === '5'} />
                    </div>
                    <div className=' flex justify-between items-center p-2 space-x-3' >
                        <input type="text" name='text' placeholder="Share Your Review" className="input input-bordered input-info w-full max-w-xs" />
                        <button

                            className="btn px-3 py-2 bg-[#00f49f]  text-white border-none  text-sm hover:bg-[#03f8a2]"
                            type="submit"
                        >
                            Comment
                        </button>
                    </div>
                </form>
            </div>
            <div >

                {
                    cmnt ?
                        <>
                            <h3 className='text-[20px] font-semibold text-center mt-6'>My Reviews</h3>
                            <CommentPart cmtpart={cmtpart}></CommentPart>
                        </>
                        :
                        <>
                            <h3 className='text-[20px] font-semibold text-center my-2'>You have no comment</h3>
                        </>
                }
            </div>
        </div>

    );
};

export default ReviewPartr;