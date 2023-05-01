import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url)
                if (!res.ok) {
                    setError('SOmething Wrong')
                    alert('Failed to fetch')
                }
                const result = await res.json()
                setData(result)
            }
            catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }
        fetchData()
    }, [url])
    return {
        data,
        loading,
        error
    }
};

export default useFetch;