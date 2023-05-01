import React from 'react';
import { toast } from 'react-hot-toast';
import { BASE_URL } from '../../BaseUrL/config';

const User = ({ user, refetch }) => {
    // make admin
    const handlerToMakeAdmin = (id) => {
        fetch(`${BASE_URL}/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin Make Successfully')
                    refetch()
                }
                console.log(data)
            })
    }

    // delete
    const handlerToDelete = id => {
        const procced = window.confirm('Are you Sure You Want to Delete this user?')
        if (procced) {
            fetch(`${BASE_URL}/delete/user/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('User Deleted Successfully')
                    refetch()
                    console.log(data);
                })
        }
    }
    return (
        <>
            <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {user?.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user?.email}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user?.phone}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user?.role !== 'admin' &&

                        <button onClick={() => handlerToMakeAdmin(user?._id)} className="btn btn-outline border-[#8DD3BB] text-black  hover:border-none hover:bg-[#95f5d4] hover:text-blue-500">Make Admin</button>}

                </td>
                <td className="whitespace-nowrap px-4 py-2">
                    <button onClick={() => handlerToDelete(user?._id)} className="btn bg-[#95f5d4]  border-[#8DD3BB] text-black  hover:border-none hover:bg-[#95f5d4] hover:text-blue-500">Delete</button>
                </td>
            </tr>
        </>
    );
};

export default User;