import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../assests/Logo/Logo.png';
import { AuthContext } from "../UseContext/AuthUseContext";
import { toast } from "react-hot-toast";
import './Navbar.css'
import useAdmin from "../Hooks/useAdmin";


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const navigate = useNavigate()
    const handlerToLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Sign Out Successful')
                navigate('/')
            })
            .catch(() => { })
    }
    return (
        <div id="sidebar" className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
            <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <NavLink
                            to="/"
                            className="active inline-flex items-center font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/alltours"

                            className="inline-flex items-center font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Tours
                        </NavLink>
                    </li>
                    {
                        user?.email &&
                        <li>
                            <NavLink
                                to="/GolobeSecurity/payment"

                                className="inline-flex items-center font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Mydashboard
                            </NavLink>
                        </li>
                    }
                    {
                        isAdmin &&
                        <li>
                            <NavLink
                                to="/adminDashBoard"

                                className="inline-flex items-center font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                AdminActions
                            </NavLink>
                        </li>
                    }


                </ul>
                <NavLink
                    to="/"

                    className="inline-flex items-center lg:mx-auto"
                >
                    <img className="w-[120px]" src={logo} alt="" />

                </NavLink>
                <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
                    {
                        !user?.email ?
                            <>
                                <li className='list-none'><NavLink to='/GolobeSecurity/login' >Sign In</NavLink></li>
                                <li className='list-none'><NavLink className="btn" to='/GolobeSecurity/signup' >Sign Up</NavLink></li>

                            </>

                            :
                            <>
                                <li className='list-none'><NavLink to='/GolobeSecurity/login' className='hidden '>Sign In</NavLink></li>

                                <div className="dropdown dropdown-end ">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar flex justify-center flex-col">



                                        {
                                            user?.photoURL ?
                                                <div className="w-10 rounded-full mr-2">
                                                    <img src={user?.photoURL} alt='' />
                                                </div>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[30px] h-[30px] text-red-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>


                                            // <CgProfile />
                                        }



                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60 ">
                                        <li><p className='text-[12px] capitalize text-orange-500'>{user?.email}</p></li>

                                        <li> <NavLink onClick={() => handlerToLogOut()} className='text-[14px]'>Log Out</NavLink></li>

                                    </ul>
                                </div>
                            </>
                    }
                </ul>
                <div className="ml-auto lg:hidden ">
                    <button


                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <NavLink
                                            to="/"

                                            className="inline-flex items-center lg:mx-auto"
                                        >
                                            <img className="w-[120px]" src={logo} alt="" />

                                        </NavLink>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <NavLink
                                                to="/"

                                                className="inline-flex items-center font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/alltours"

                                                className="inline-flex items-center font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Tours
                                            </NavLink>
                                        </li>
                                        {
                                            user?.email &&
                                            <li>
                                                <NavLink
                                                    to="/GolobeSecurity/payment"

                                                    className="inline-flex items-center font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Mydashboard
                                                </NavLink>
                                            </li>
                                        }
                                        {
                                            isAdmin &&
                                            <li>
                                                <NavLink
                                                    to="/adminDashBoard"

                                                    className="inline-flex items-center font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    AdminActions
                                                </NavLink>
                                            </li>
                                        }

                                        {
                                            !user?.email ?
                                                <>
                                                    <li className='list-none'><NavLink to='/GolobeSecurity/login' >Sign In</NavLink></li>

                                                </>

                                                :
                                                <>
                                                    <li className='list-none'><NavLink to='/GolobeSecurity/login' className='hidden '>Sign In</NavLink></li>

                                                    <div className="dropdown dropdown-end ">
                                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar flex justify-center flex-col">



                                                            {
                                                                user?.photoURL ?
                                                                    <div className="w-10 rounded-full mr-2">
                                                                        <img src={user?.photoURL} alt='' />
                                                                    </div>
                                                                    :
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[30px] h-[30px] text-red-500">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                    </svg>


                                                                // <CgProfile />
                                                            }



                                                        </label>
                                                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                                                            <li><p className='text-[12px] capitalize text-orange-500'>{user?.email}</p></li>
                                                            <li >
                                                                <NavLink className="justify-between" to='/profile'>
                                                                    Profile
                                                                </NavLink>
                                                            </li>
                                                            <li> <NavLink onClick={() => handlerToLogOut()} className='w-1/2 text-[14px]'>Log Out</NavLink></li>

                                                        </ul>
                                                    </div>
                                                </>
                                        }
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >

    );
};
export default NavBar;