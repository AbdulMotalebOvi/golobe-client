import { useEffect, useState } from 'react';
import { BASE_URL } from '../BaseUrL/config';

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoader, setIsAdminLoader] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`${BASE_URL}/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsAdmin(data.isAdmin)
                    setIsAdminLoader(false)
                })
        }
    }, [email])
    return [isAdmin, isAdminLoader]
};
export default useAdmin;