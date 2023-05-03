import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img1 from '../assests/images/Rectangle 20.png'
import img2 from '../assests/images/re2.png'
import facebook from '../assests/svg/facebook-circle-fill.svg'
import google from '../assests/svg/google-fill.svg'
import apple from '../assests/svg/apple-fill.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper';
import { AuthContext } from '../UseContext/AuthUseContext';
import { toast } from 'react-hot-toast';
import useTitle from '../Hooks/useTitle';
import './login.css'
import useToken from '../Hooks/useToken';


const Login = () => {
    useTitle('Sign In')
    const { signIn, signInWithGoogle } = useContext(AuthContext)
    const [error, setError] = useState('')

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";
    const [emailToken, setEmailToken] = useState('')
    const [token] = useToken(emailToken)
    if (token) {
        navigate(from, { replace: true });
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const submit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user
                setEmailToken(user.email)
                toast.success('Sign In Successful')

                reset()
            })
            .catch(err => {
                const errorMessage = err.message;
                setError(errorMessage)
                console.log(errorMessage)
            })
    };
    // google sign up
    const googleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user
                navigate('/')
                console.log(user);
            }).catch(err => console.log(err))
    }

    // swiper
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
            <div class="w-full">
                <div class="md:mt-[60px] space-y-2">
                    <h2 class="text-3xl font-bold">Login</h2>
                    <p>Login to access your Golobe account</p>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <div class="form-control w-full mt-[48px]">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input class="input input-bordered w-full" {...register("email", { required: true })} />
                        {errors.email?.type === 'required' && <p class="text-red-600 font-semibold">Email is required</p>}
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type='password' class="input input-bordered w-full" {...register("password", {
                            required: true,
                            minLength: { value: 6, message: 'Password Must be At lest 6 characters or longer' }
                        }
                        )} />
                        <p class="text-red-600 font-semibold ">{error}</p>
                        {errors.password?.type === 'required' && <p class="text-red-600 font-semibold">Password is required</p>}
                        <label class="label">
                            <span class="label-text text-[13px]">Forget Password?</span>
                        </label>
                    </div>
                    <button type="submit" class="mt-4 btn w-full bg-[#8DD3BB] text-black border-none my-5 hover:bg-[#7bffd1]">Login</button>
                    <p class="text-[15px] mt-3 text-center my-5">Do you have a account? <span><Link to='/GolobeSecurity/signup' class='text-[#FF8682] font-semibold'>Sign Up</Link></span></p>
                </form>
                <div class="flex flex-col w-full border-opacity-50">
                    <div class="divider ">Or login with</div>
                    <div class="grid grid-cols-3 gap-3 my-6">
                        <button class="btn btn-outline border-[#8DD3BB] hover:border-none hover:bg-[#95f5d4]"><img src={facebook} alt="" /></button>
                        <button onClick={() => googleSignIn()} class="btn btn-outline border-[#8DD3BB] hover:border-none hover:bg-[#95f5d4]"><img src={google} alt="" /></button>
                        <button class="btn btn-outline border-[#8DD3BB] hover:border-none hover:bg-[#95f5d4]"><img src={apple} alt="" /></button>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[550px] h-[500px] md:h-[700px]'>
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
                    <SwiperSlide><img src={img1} alt="" className="w-full h-full object-cover" /></SwiperSlide>
                    <SwiperSlide><img src={img2} alt="" className="w-full h-full object-cover" /></SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>

        </div >
    );
};

export default Login;