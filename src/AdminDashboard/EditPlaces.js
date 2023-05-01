import React from 'react';
import { BASE_URL } from '../BaseUrL/config';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const EditPlaces = () => {
    const url = `${BASE_URL}/places`
    const { data: placesData = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })
    const handlerToDelete = (id) => {
        const proceed = window.confirm('Are you Sure?')
        if (proceed) {
            fetch(`${BASE_URL}/delete/place/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        toast.success('Place deleted Successfully')
                        refetch()
                    }
                })
        }
    }
    return (

        < div className="overflow-x-auto" >
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Place Image
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Place and Country
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Per Person
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Distance Covered
                        </th>

                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Delete
                        </th>

                    </tr>
                </thead>

                <tbody className=" divide-y divide-gray-200">
                    {
                        placesData?.map(dt => <tr key={dt?._id}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                <img className='w-[90px] rounded-xl' src={dt?.image_url} alt="" />
                            </td>
                            <div className='flex space-x-1'>
                                <td className="whitespace-nowrap py-2 font-medium text-gray-900">
                                    {dt?.place} ,
                                </td>
                                <td className="whitespace-nowrap py-2 text-orange-700">{dt?.country}</td>
                            </div>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">${dt?.ticket_price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{dt?.distance_covered}Km</td>

                            <td className="whitespace-nowrap px-4 py-2">
                                <Link
                                    to=""
                                    onClick={() => handlerToDelete(dt?._id)}
                                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Delete
                                </Link>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div >
    );
};

export default EditPlaces;