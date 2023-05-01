import React, { useContext, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../BaseUrL/config';
import { AuthContext } from '../UseContext/AuthUseContext';
import ReviewPartr from './ReviewPartr';

const Place = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const loader = useLoaderData()
    const [total, setTotal] = useState('')
    const { place, ticket_price, country, image_url } = loader
    const tottalAMount = useRef('')
    const [isInputDisabled, setIsInputDisabled] = useState(false);

    const handlerToSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const phone = form.number.value
        const date = form.time.value
        const data = {
            place,
            country,
            total,
            image_url,
            email,
            bookingDate: date,
            customerName: name,
            phone

        }

        fetch(`${BASE_URL}/mybookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Booking Confirmed')
                    navigate('/GolobeSecurity/payment')
                }
                else {
                    toast.error(data.message)
                }
            })

        // const amount = form.person.value


    }
    const handlerTotal = () => {
        const amount = tottalAMount.current.value
        const allAmount = ticket_price * parseFloat(amount)
        setTotal(allAmount)
        setIsInputDisabled(true)
    }
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <div className="relative ">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-gray-50  py-12 md:py-24">
                        <ReviewPartr data={loader}></ReviewPartr>
                    </div>

                    <div className="bg-white py-12 md:py-24 border">
                        <div className="mx-auto max-w-lg px-4 lg:px-8 sticky top-5">
                            <div className=" border rounded">
                                <div className='p-5'>
                                    <p className='text-[22px]  '><span className='text-[26px] font-bold text-red-600'>${ticket_price}</span> /per person</p>
                                </div>
                            </div>
                            <h2 className='text-2xl font-bold mt-10'>Information</h2>


                            <form onSubmit={handlerToSubmit} className='mt-5 '>

                                <div className='space-y-2 bg-none '>
                                    <div className="col-span-6 border">
                                        <input
                                            className="w-full rounded-lg  p-2.5 text-sm shadow-sm focus:outline-none"
                                            type="text"
                                            name="name"
                                            placeholder='Name'
                                            required
                                        />
                                    </div>
                                    <div className="col-span-6 border">
                                        <input
                                            className="w-full rounded-lg  p-2.5 text-sm shadow-sm focus:outline-none"
                                            type="email"
                                            name="email"
                                            defaultValue={user?.email}
                                            placeholder='Email'
                                            required
                                            disabled
                                        />
                                    </div>

                                    <div className="col-span-6 border">
                                        <input
                                            className="w-full rounded-lg  p-2.5 text-sm shadow-sm focus:outline-none"
                                            type="number"
                                            name="number"
                                            placeholder='Number'
                                            required
                                        />
                                    </div>


                                    <div className='col-span-6 border py-2'>

                                        <input type="datetime-local" id="meeting-time"
                                            name="time"
                                            min="2022-06-07T00:00" max="2023-06-14T00:00"

                                        ></input>
                                    </div>
                                </div>

                                <div className='flex items-center justify-between mt-10 '>
                                    <div className='flex justify-between items-center space-x-3'>
                                        <p className='text-[22px]  font-bold'>${ticket_price} </p>
                                        <p>x</p>
                                        <div className="col-span-6 border">
                                            <input
                                                className=" rounded-lg  p-2.5 text-sm shadow-sm w-[100px] focus:outline-none"
                                                type="number"
                                                name="person"
                                                ref={tottalAMount}
                                                placeholder='Person'
                                                disabled={isInputDisabled}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <>
                                        {
                                            total ? <h4>${total}</h4>
                                                :
                                                <button
                                                    onClick={handlerTotal}
                                                    className=" btn
                                               btn-sm rounded-lg btn-outline text-sm text-black
                                                    
                                                    "

                                                >
                                                    See Total
                                                </button>
                                        }
                                    </>

                                </div>
                                <button type="submit"
                                    className="btn mt-4 w-full bg-[#00f49f]  text-white border-none my-5 hover:bg-[#03f8a2]"
                                >


                                    Book Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Place;