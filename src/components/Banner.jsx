import React from 'react'
import Food1 from '../assets/biryani5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faCartShopping, faHouseLock, faLock, faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import { faUserLock } from '@fortawesome/free-solid-svg-icons/faUserLock';

const Banner = () => {
  return (
    <div>
        <div>
            <div data-aos="slide-up" data-aos-duraion="300" className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    <div>
                        <img src={Food1} alt="" className='max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]' />
                    </div>
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className='text-3xl sm:text-4xl font-bold'>
                            Find Top Dishes
                        </h1>
                        <p className='text-sm text-gray-600 tracking-wide leading-5'>
                        Get ready to taste the authentic flavours of Mangalorean cuisine in the most-awaited 'Mangaluru Street Food Fiesta' happening from January.
                        <br></br>
                        <br>
                        </br>
                        The dishes here range from the special occasion (an ultra-high-end pasta punched up with foie gras) to the everyday (a grab-and-go sandwich I've had for lunch)
                        </p>
                        <div>
                            <div>
                                <FontAwesomeIcon className="text-3xl h-8 w-8 md:h-12 md:w-12 shadow-sm p-5 rounded-full bg-violet-200 dark:bg-violet-500" icon={faLock}/>
                            </div>
                            <div>
                                <FontAwesomeIcon className="text-3xl h-8 w-8 md:h-12 md:w-12 shadow-sm p-5 rounded-full bg-orange-200 dark:bg-orange-500" icon={faBowlFood}/>
                            </div>
                            <div>
                                <FontAwesomeIcon className="text-3xl h-8 w-8 md:h-12 md:w-12 shadow-sm p-5 rounded-full bg-green-200 dark:bg-green-500" icon={faTruckPickup}/>
                            </div>
                        </div>
                        <div>
                            <button className='bg-gradient-to-r from-yellow-400 to-orange-800 text-white px-6 py-3 rounded-full hover:scale-105 duration-200 font-semibold'>
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Banner
