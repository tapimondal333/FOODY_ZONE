import React from 'react'
import logo from '../assets/logo.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className='bg-gray-200 dark:bg-gray-950' id='Footer'>
            <div className='max-w-[1200px] mx-auto'>
                <div className='grid grid-cols-3 py-5'>
                    <div className='py-8 px-4'>
                        <h1 className='flex flex-wrap items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'>
                            <img src={logo} alt="" className='max-w-[50px]' />
                            FOODIE
                        </h1>
                        <p className=''>
                            Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this.".
                        </p>
                        <br></br>
                        <div className='flex items-center gap-3 mt-6'>

                            <FontAwesomeIcon icon={faLocationArrow} />
                            <p>kolkata,WestBengal</p>

                        </div>
                        <div className='flex items-center gap-3 mt-3'>
                            <FontAwesomeIcon icon={faMobileAlt} />
                            <p>+91 9925296543</p>
                        </div>
                        <div>
                           <h1 className=' text-lg sm:text-xl lg:text-3xl font-bold mt-4'>Social Links</h1>
                           <div className='flex items-center gap-3 mt-3'>
                                <a href="#"><FontAwesomeIcon icon={faInstagram} className='text-3xl' /></a>
                                <a href="#"><FontAwesomeIcon icon={faFacebook} className='text-3xl' /></a>
                                <a href="#"><FontAwesomeIcon icon={faLinkedin} className='text-3xl' /></a>

                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold text-justify sm:text-left mb-3'>Company</h1>
                                <ul className='flex flex-col gap-3'>
                                    <li><a href="#Header">Home</a></li>
                                    <li><a href="#About">Services</a></li>
                                    <li><a href="#Testimonial">Testimonial</a></li>
                                    <li><a href="#Header">Login</a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold text-justify sm:text-left mb-3'>Availble in:</h1>
                                <ul className='flex flex-col gap-3'>
                                    <li><a href="#">kolkata</a></li>
                                    <li><a href="#">Patna</a></li>
                                    <li><a href="#">Guwahati</a></li>
                                    <li><a href="#">bhubaneswar</a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold text-justify sm:text-left mb-3'>Life at Foodie</h1>
                                <ul className='flex flex-col gap-3'>
                                    <li><a href="#">Explore with Foodie</a></li>
                                    <li><a href="#">Foodie News</a></li>
                                    <li><a href="#">Career</a></li>
                                    <li><a href="#">Snackable</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-center border-t-2 border-gray-600 py-10 '>
                        @Copyright 2024 all rights reerved || Made by Tapi Mondal
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer