import React, { useState } from 'react';
import { BASE_URL } from '../BaseUrL/config';
import useTransactionStatus from '../Hooks/useTransactionStatus';

const PaymentSuccess = () => {
    const { transactionId, transactionDetails } = useTransactionStatus(BASE_URL);



    if (!transactionId) {
        return <p>No transaction ID found.</p>;
    }
    function handlePrint() {
        window.print();
    }
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Place Name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Email
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Price
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            TransactionId
                        </th>

                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Status
                        </th>


                    </tr>
                </thead>

                <tbody className=" divide-y divide-gray-200">
                    <tr className='ltr:text-left rtl:text-right'>
                        <td className="whitespace-nowrap px-4 py-2 font-bold text-orange-700">
                            {transactionDetails?.place}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-orange-700">{transactionDetails?.email}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-orange-700">${transactionDetails?.price}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-orange-700">{transactionDetails?.transactionId}</td>

                        <td className="whitespace-nowrap px-4 py-2">
                            {
                                transactionId &&
                                <button

                                    className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    paid
                                </button>
                            }
                        </td>

                        <td className="whitespace-nowrap px-4 py-2">
                            {
                                transactionId &&
                                <button
                                    onClick={handlePrint}
                                    className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    print
                                </button>
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PaymentSuccess;