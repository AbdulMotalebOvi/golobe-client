import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/Logo/Logo2.png'
const Footer = () => {
    return (
        <div className='print:hidden'>
            <footer className="footer relative before:absolute before:inset-0 text-center sm:text-justify p-10 bg-[#8DD3BB] text-black mt-[-6px] sm:mt-[200px]">
                <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-[150px]'>
                    <img className='w-[100px]' src={logo} alt="" />
                </div>
                <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-[-9px] sm:mt-[100px]'>
                    <span className=" text-[#112211] font-bold">Our Destinations</span>
                    <Link className="link link-hover">Canada</Link>
                    <Link className="link link-hover">Alaska</Link>
                    <Link className="link link-hover">Ireland</Link>
                    <Link className="link link-hover">France</Link>
                </div>
                <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  mt-[-9px] sm:mt-[100px]'>
                    <span className=" text-[#112211] font-bold">Our Activities</span>
                    <Link className="link link-hover">Northern Lights</Link>
                    <Link className="link link-hover">Cruising & sailing</Link>
                    <Link className="link link-hover">Multi-activities</Link>
                    <Link className="link link-hover">Kayaing</Link>
                </div>
                <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  mt-[-9px] sm:mt-[100px]'>
                    <span className=" text-[#112211] font-bold">Travel Blogs</span>
                    <Link className="link link-hover">Bali Travel Guide</Link>
                    <Link className="link link-hover">Sri Lanks Travel Guide</Link>
                    <Link className="link link-hover">Peru Travel Guide</Link>
                    <Link className="link link-hover">Bali Travel Guide</Link>
                </div>
                <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  mt-[-9px] sm:mt-[100px]'>
                    <span className=" text-[#112211] font-bold">About US</span>
                    <Link className="link link-hover">Our Story</Link>
                    <Link className="link link-hover">Work with us</Link>

                </div>
                <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  mt-[-9px] sm:mt-[100px]'>
                    <span className=" text-[#112211] font-bold">Contact US</span>
                    <Link className="link link-hover">Our Story</Link>
                    <Link className="link link-hover">Work with us </Link>

                </div>
                <div className="hidden sm:block absolute bottom-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1232px] h-[250px] bg-[#CDEAE1] rounded-[20px] ">
                    <div className="relative">
                        <div className='space-y-3 p-[24px]'>
                            <h3 className='text-3xl font-bold'>Subscribe Newsletter</h3>
                            <h5 className='text-xl font-bold'>The Travel</h5>
                            <p>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div >
    );
};

export default Footer;