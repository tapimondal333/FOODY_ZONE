import React from 'react'
import logo from '../assets/logo.avif'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons/faShoppingBasket'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import DarkMode from './DarkMode'

const Navbar = () => {
    return (
        <>
            <div className=' absolute top-0 left-0 z-10 shadow-md bg-white w-full  dark:bg-gray-900 dark:text-white duration-200'>
                <div className='container py-2 sm:p-0'>
                    <div className="flex justify-between items-center  ">
                        <div>
                            <a className='flex justify-center items-center gap-2 text-2xl sm:text-3xl font-bold' href="#">
                                <img className='w-16' src={logo} alt="Foodie Zone" />
                                Foodie Zone
                            </a>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <DarkMode></DarkMode>
                            </div>
                            <ul className=' hidden sm:flex sm:gap-4 md:gap-8 '>
                                <li>
                                    <a className='inline-blockpy-4b px-4 hover:text-primary font-semibold' href="#Header">Home</a>
                                </li>
                                <li>
                                    <a className='inline-blockpy-4b px-4 hover:text-primary font-semibold' href="#About">About</a>
                                </li>
                                <li>
                                    <a className='inline-blockpy-4b px-4 hover:text-primary font-semibold' href="#Footer">Contact</a>
                                </li>
                            </ul>
                            <button className='bg-gradient-to-r from-yellow-400 to-orange-700 text-white text-lg font-semibold px-4 items-center py-1 rounded-full hover:scale-105 duration-200'>
                                    Sign in
                                <FontAwesomeIcon icon={faUser} className=' text-white drop-shadow-sm pl-2 cursor-pointer'/>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar