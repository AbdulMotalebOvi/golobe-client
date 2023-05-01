import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { BASE_URL } from '../BaseUrL/config';
import { AuthContext } from '../UseContext/AuthUseContext';
import PamentData from './PamentData';



const PaymentList = () => {
    const { user } = useContext(AuthContext)

    const booking_url = `${BASE_URL}/mybookings?email=${user?.email}`
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(booking_url)
            const data = await res.json()
            return data
        }
    })

    return (
        <>
            {
                bookings &&
                    bookings.length ?
                    <div>
                        <h3 className='font-bold text-2xl'>Items Found: {bookings.length}</h3>
                        <div className="overflow-x-auto mt-5">
                            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                                <thead>
                                    <tr>
                                        <th
                                            className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
                                        >

                                        </th>
                                        <th
                                            className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
                                        >
                                            Place Image
                                        </th>
                                        <th
                                            className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
                                        >
                                            Name
                                        </th>

                                        <th
                                            className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
                                        >
                                            Phone
                                        </th>
                                        <th
                                            className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
                                        >
                                            Total
                                        </th>
                                        {
                                            bookings?.transactionId &&
                                            <th
                                                className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
                                            >
                                                Status
                                            </th>
                                        }

                                    </tr>
                                </thead>
                                {
                                    bookings?.map(bk => <PamentData bookings={bk} refetch={refetch} ></PamentData>)
                                }
                            </table>
                        </div>
                    </div>
                    :
                    <h3 className='text-center font-semibold text-3xl'>You Have currently no booking.</h3>
            }
        </>
    );
};

export default PaymentList;