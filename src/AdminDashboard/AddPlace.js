import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BASE_URL } from '../BaseUrL/config';
import { toast } from 'react-hot-toast';
import Spinner from '../Spinner/Spinner';
import { useNavigate } from 'react-router-dom';


const AddPlace = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const img = process.env.REACT_APP_IMGBB_SECRET_KEY
    const addPlaces = (data) => {
        setLoading(true)
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image)

        fetch(`https://api.imgbb.com/1/upload?key=${img}`, {
            method: 'POST',
            body: formData
        })

            .then(response => response.json())
            .then(result => {
                const placeInfo = {
                    place: data.place,
                    country: data.country,
                    ticket_price: parseFloat(data.price),
                    distance_covered: parseFloat(data.distance),
                    image_url: result.data.url,
                }
                console.log(result);
                setLoading(true)
                fetch(`${BASE_URL}/places`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(placeInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        toast.success('Place Added Successfully')
                        setLoading(false)
                        navigate('/alltours')
                        reset()
                    })
            })

    }
    return (
        <div>
            <form onSubmit={handleSubmit(addPlaces)}>

                <div className="form-control w-full ">
                    <div className='flex space-x-6'>
                        <div>
                            <label className="label">
                                <span className="label-text">Place Name</span>
                            </label>
                            <input type='text' className="input input-bordered w-full capitalize"  {...register("place", { required: "Place Name is required" })} />

                            {errors.name && <p className='text-red-500 font-semibold'>{errors.name?.message}</p>}
                        </div>
                        <div>

                            <label className="label">
                                <span className="label-text">Country</span>
                            </label>

                            <input type='text' className="input input-bordered w-full "   {...register("country", { required: 'Country is required' })} />

                            {errors.country && <p className='text-red-500 font-semibold'>{errors.country?.message}</p>}
                        </div>
                    </div>
                    <div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Ticket  Price</span>
                            </label>
                            <label className="input-group">
                                <span>Price</span>
                                <input type="number" placeholder="10" className="input input-bordered" {...register("price", { required: 'Price is required' })} />
                                <span>USD</span>
                            </label>
                        </div>
                    </div>
                    <div>

                        <label className="label">
                            <span className="label-text">Distance Covered</span>
                        </label>

                        <input type='number' className="input input-bordered " placeholder='km'   {...register("distance", { required: 'Distance is required' })} />


                        {errors.country && <p className='text-red-500 font-semibold'>{errors.country?.message}</p>}
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <div className="form-control w-full max-w-xs  border p-8 ">

                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", { required: 'Photo is required' })} />

                            {errors.image &&
                                <p className='text-red-500 font-semibold'>{errors.image?.message}</p>}



                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit" className='mt-4 btn bg-[#8DD3BB]  text-black border-none my-5 hover:bg-[#7bffd1]' >Add Place</button>
                    {loading &&
                        (
                            <div
                                style={{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    width: '100vw',
                                    height: '100vh',
                                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                    zIndex: 9999,
                                }}
                            >
                                <Spinner />
                            </div>
                        )
                    }
                </div>

            </form>
        </div>
    );
};

export default AddPlace;