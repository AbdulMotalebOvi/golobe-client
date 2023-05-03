import React, { useContext } from 'react';
import { BASE_URL } from '../BaseUrL/config';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../UseContext/AuthUseContext';
import { Link } from 'react-router-dom';


const PamentData = ({ refetch, bookings }) => {
    const { user } = useContext(AuthContext)
    // const isPaid = useTransactionStatus(bookings?._id)

    const data = {
        service: bookings?._id,
        amount: bookings?.total,
        place: bookings?.place,
        email: user?.email,
        phone: bookings?.phone

    }
    const makePayment = () => {
        fetch(`${BASE_URL}/payment`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data.url)

            })
    }
    const handlerToDelete = (id) => {
        const confirm = window.confirm('Do you want to delete this Booking?')
        const url = `${BASE_URL}/bookings/${id}`
        if (confirm) {
            fetch(url, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Item deleted Successfully')
                        refetch()
                    }
                })
        }
    }
    return (
        <tbody className="divide-y divide-gray-200">
            <tr>
                <td className='cursor-pointer text-2xl' onClick={() => handlerToDelete(bookings?._id)}>
                    <i className="ri-delete-bin-6-line "></i>
                </td>
                {
                    bookings?.transactionId ?
                        <>
                            <td className="whitespace-nowrap px-4 py-2 hidden sm:table-cell">
                                {bookings?.email}
                            </td>
                        </>
                        :
                        <td className="whitespace-nowrap px-4 py-2 ">
                            <img
                                src={bookings?.image_url}
                                alt=""
                                className="h-16 w-16 rounded object-cover"
                            />
                        </td>
                }
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{bookings?.place} , {bookings?.country}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{bookings?.phone}</td>
                {
                    bookings?.transactionId ?
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 hidden sm:table-cell">${bookings?.price}</td>
                        :
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 hidden sm:table-cell">${bookings?.total}</td>
                }
                <td className="whitespace-nowrap px-4 py-2">
                    {
                        bookings?.transactionId &&
                        <Link
                            className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                        >
                            paid
                        </Link>
                    }
                    {
                        !bookings?.transactionId &&
                        <Link
                            onClick={() => makePayment()}
                            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                        >
                            pay
                        </Link>
                    }
                </td>
            </tr>
        </tbody>



    );
};

export default PamentData;