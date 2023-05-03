import React, { useContext, useRef, useState } from 'react';
import img1 from '../assests/images/Rectangle 20.png'
import img2 from '../assests/images/re2.png'
import facebook from '../assests/svg/facebook-circle-fill.svg'
import google from '../assests/svg/google-fill.svg'
import apple from '../assests/svg/apple-fill.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import '../Login/login.css'
import { AuthContext } from '../UseContext/AuthUseContext';
import { toast } from 'react-hot-toast';
import useTitle from '../Hooks/useTitle';
import useToken from '../Hooks/useToken';

const SignUp = () => {
    useTitle('Sign Up')
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()
    // firebase actions
    const { createUser, updateInfo, signInWithGoogle } = useContext(AuthContext)
    const [error, setError] = useState()
    // signup methods
    // password check
    const [passwordmatched, setPasswordmatched] = useState(false)
    const [tokenemail, setTokenEmail] = useState('')
    const [token] = useToken(tokenemail)
    if (token) {
        navigate('/')
    }

    const submit = data => {
        const password = watch('password')
        const confirmPassword = watch('confirmPassword ')
        if (password === confirmPassword) {
            setPasswordmatched(true)

        } else {
            setPasswordmatched(false)

        }

        const name = data.firstName + data.lastName
        console.log(data.number);

        createUser(data.email, data.password)

            .then(result => {
                const user = result.user
                updateInfo(data.name)
                    .then(() => {
                        saveUserInDB(name, data.email, data.number)
                        toast.success('User Created Successfully')
                        reset()
                        setPasswordmatched(' ')

                    })

            })
            .catch(err => {
                const errorMessage = err.message;
                setError(errorMessage)
                console.log(errorMessage)
            })

    };
    const saveUserInDB = (name, email, phone) => {
        const user = { name, email, phone }
        fetch('https://golobe-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTokenEmail(email)
            })

    }
    // google sign up
    const googleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user
                navigate('/')
            }).catch(err => console.log(err))
    }


    // swipper js
    const [isChecked, setIsChecked] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setIsButtonDisabled(isChecked);
    }
    // watch input value by passing the name of it
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 my-20'>
            <div className='w-full lg:w-[550px] lg:h-[700px]'>
                <Swiper
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img2} alt="" className="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} alt="" className="w-full h-full object-cover" />
                    </SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper >
            </div>
            <div className='w-full'>
                <div className='mt-5 lg:mt-0 space-y-2'>
                    <h2 className='text-3xl lg:text-4xl font-bold'>Sign up</h2>
                    <p className='text-lg lg:text-xl'>Let’s get you all set up so you can access your personal account.</p>
                </div>
                <form onSubmit={handleSubmit(submit)} className="w-full lg:max-w-full md:max-w-md mx-auto">
                    <div className="form-control mt-8">
                        {/* name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input
                                    className="input input-bordered w-full"
                                    {...register("firstName", { required: true })}
                                />
                                {errors.firstName?.type === "required" && (
                                    <p className="text-red-400 font-semibold">First Name is required</p>
                                )}
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input
                                    className="input input-bordered w-full"
                                    {...register("lastName", { required: true })}
                                />
                                {errors.lastName?.type === "required" && (
                                    <p className="text-red-400 font-semibold">Last Name is required</p>
                                )}
                            </div>
                        </div>

                        {/* email & phone number */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    className="input input-bordered w-full"
                                    {...register("email", { required: true })}
                                />
                                {errors.email?.type === "required" && (
                                    <p className="text-red-400 font-semibold">Email is required</p>
                                )}
                                <p className="text-red-600 font-semibold">{error}</p>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input
                                    className="input input-bordered w-full"
                                    {...register("number", { required: true })}
                                />
                                {errors.number?.type === "required" && (
                                    <p className="text-red-400 font-semibold">
                                        Phone Number is required
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* password */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    className="input input-bordered w-full"
                                    {...register("password", {
                                        required: true,
                                        minLength: { value: 6, message: "Password must be at least 6 characters long" },
                                    })}
                                />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600 font-semibold">Password is required</p>
                                )}
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    className="input input-bordered w-full"
                                    {...register("confirmPassword", {
                                        required: true,
                                        minLength: { value: 6, message: "Password must be at least 6 characters long" },
                                    })}
                                />
                                <>
                                    {passwordmatched && <p className="text-green-400">Passwords match!</p>}
                                </>
                                {errors.confirmPassword?.type === "required" && (
                                    <p className="text-red-600 font-semibold">Confirm Password is required</p>
                                )}
                            </div>
                        </div>



                    </div>

                    <div className='flex flex-col justify-center items-center space-y-5 my-10'>
                        <div className='flex items-center space-x-2'>
                            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className="checkbox" />
                            <p className='text-sm'> I agree to all the <span className='text-[#FF8682]'>Terms </span> and <span className='text-[#FF8682]'>Privacy Policies</span></p>
                        </div>
                        <button disabled={isButtonDisabled} type="submit" className='btn w-full bg-[#8DD3BB]  text-black border-none my-5 hover:bg-[#7bffd1]' >Create Account</button>
                        <p className='text-sm text-center my-5'>Already have an account? <Link to='/GolobeSecurity/login' className='text-[#FF8682] font-semibold'>Log in</Link></p>
                    </div>

                </form>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">Or Sign up with</div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-6'>
                        <button className="btn btn-outline border-[#8DD3BB] hover:border-none hover:bg-[#95f5d4]">
                            <img src={facebook} alt="Facebook" />
                        </button>
                        <button onClick={() => googleSignIn()} className="btn btn-outline border-[#8DD3BB] hover:border-none hover:bg-[#95f5d4]">
                            <img src={google} alt="Google" />
                        </button>
                        <button className="btn btn-outline border-[#8DD3BB] hover:border-none hover:bg-[#95f5d4]">
                            <img src={apple} alt="Apple" />
                        </button>
                    </div>
                </div>


            </div>

        </div >
    );
};

export default SignUp;



