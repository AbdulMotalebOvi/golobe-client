import { useEffect, useState } from 'react';
import { BASE_URL } from '../BaseUrL/config';

const useToken = (email) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        if (email) {
            fetch(`${BASE_URL}/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken)
                        setToken(data.accessToken)
                    }
                })
        }
    }, [email])
    return [token]
};

export default useToken;