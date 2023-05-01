import React from 'react';
import { BASE_URL } from '../../BaseUrL/config';
import { useQuery } from '@tanstack/react-query';
import User from './User';

const AllUsers = () => {
    const url = `${BASE_URL}/users`
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                    <thead>
                        <tr>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Name
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Email
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Phone
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Make Admin
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Delete User
                            </th>

                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">

                        {
                            users?.map(user => <User user={user} refetch={refetch}></User>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;