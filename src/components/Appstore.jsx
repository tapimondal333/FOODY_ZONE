import React from 'react'
import Appstoreimg from '../assets/app_store.png'
import Playstoreimg from '../assets/play_store.png'
import Gif from '../assets/mobile_bike.gif'
const Appstore = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-800 py-14 '>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4 '>
            <div className='space-y-6 max-w-xl mx-auto'>
                <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold text-gray-800 dark:text-gray-400'>Foodly is Availble on Android and Ios</h1>
            </div>
            <div className='flex flex-wrap justify-center sm:justify-start items-center gap-4'>
                <a href="#">
                    <img src={Playstoreimg} alt="Playstore" className='max-w-[150px] sm:max-w-[120px] md:max-w-200px' />
                </a>
                <a href="#">
                    <img src={Appstoreimg} alt="Playstore" className='max-w-[150px] sm:max-w-[120px] md:max-w-200px' />
                </a>
            </div>
            <div >
                <img src={Gif} alt="gif" className='max-w-[300px] mx-auto ' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Appstore