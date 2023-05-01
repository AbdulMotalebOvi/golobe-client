import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import locationImg from '../../assests/svg/map-pin-line.svg'
import people from '../../assests/svg/people.svg'
import search from '../../assests/svg/search-line.svg'
import { BASE_URL } from '../../BaseUrL/config';


const Flight = () => {
    const navigate = useNavigate()
    // const [data, setData] = useState([])
    const locationRef = useRef("")

    const handlerToSubmit = async () => {
        const location = locationRef.current.value

        const res = await fetch(`${BASE_URL}/placeName?place=${location}`)

        const result = await res.json()
        if (result) {
            navigate(`/searchPlace?place=${location}`, { state: { result } })
        }

    }
    return (
        <div className='grid grid-cols-2 mt-20 '>
            <form onSubmit={handlerToSubmit}>
                <div className='flex space-x-3 items-center'>

                    <div className="flex items-center relative">
                        <span className='absolute inset-y-0 right-0 grid place-content-center px-4'><img height="15" width="15" src={locationImg} alt='' /></span>

                        <input
                            type="text"
                            className="w-full rounded-lg border-solid outline-none border-4 border-gray-400  p-4 pr-12 text-sm placeholder-black shadow-lg focus:bg-white border-transparent focus:border-blue-400"
                            placeholder="From"
                        />
                    </div>
                    <div className="flex items-center relative">
                        <span className='absolute inset-y-0 right-0 grid place-content-center px-4'><img height="15" width="15" src={locationImg} alt='' /></span>

                        <input
                            ref={locationRef}
                            type="text"
                            name='where'
                            className="capitalize w-full rounded-lg border-solid outline-none border-4 border-gray-400  p-4 pr-12 text-sm placeholder-black shadow-lg focus:bg-white border-transparent focus:border-blue-400"
                            placeholder="To"
                        />
                    </div>
                    <div className="flex items-center relative">
                        <span className='absolute inset-y-0 right-0 grid place-content-center px-4'><img height="15" width="15" src={people} alt='' /></span>

                        <input
                            type="number"
                            name='people'
                            className="w-full rounded-lg border-solid outline-none border-4 border-gray-400  p-4 pr-12 text-sm placeholder-black shadow-lg focus:bg-white border-transparent focus:border-blue-400"
                            placeholder="Max People"
                        />
                    </div>


                </div>
            </form>
            <div>
                <button onClick={() => handlerToSubmit()} className="bg-orange-300 p-4 ml-4 rounded-lg w-[60px]">
                    <img height="35" width="35" src={search} alt='' />
                </button>
            </div>

        </div>
    );
};

export default Flight;