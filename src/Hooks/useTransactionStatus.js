import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useTransactionStatus = (baseURL) => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const transactionId = query.get('transactionId');
    const [transactionDetails, setTransactionDetails] = useState(null);

    useEffect(() => {
        if (transactionId) {
            const url = `${baseURL}/order/transactionHistory/${transactionId}`;
            fetch(url)
                .then(response => response.json())
                .then(data => setTransactionDetails(data))
                .catch(error => console.log(error));
        }
    }, [transactionId, baseURL]);

    return { transactionId, transactionDetails };

};

export default useTransactionStatus;