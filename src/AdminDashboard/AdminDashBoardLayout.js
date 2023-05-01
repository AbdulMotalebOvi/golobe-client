import React, { useContext } from 'react';
import NavBar from '../NavBar/NavBar';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import { AuthContext } from '../UseContext/AuthUseContext';

const AdminDashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <div className='max-w-screen-xl mx-auto'>
                <NavBar></NavBar>
                <div className="drawer drawer-mobile  my-10">
                    <input id="dashboardLayout" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col ">

                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboardLayout" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 text-base-content">





                            {
                                isAdmin &&
                                <>
                                    <li><Link to='/adminDashBoard'>All Users</Link></li>
                                    <li><Link to='/adminDashBoard/addPlaces'>Add Places</Link></li>
                                    <li><Link to='/adminDashBoard/editPlaces'>Edit Places</Link></li>
                                </>
                            }

                        </ul>
                    </div>
                </div>

            </div >
        </div>
    );
};

export default AdminDashBoardLayout;