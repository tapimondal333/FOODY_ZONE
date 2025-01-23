import React from 'react'
import bgImg from '../assets/vector3.png';
import Food1 from '../assets/biryani2.png';
import Food2 from '../assets/biryani3.png';
import Food3 from '../assets/biryani5.png';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const imageList = [
    {
        id: 1,
        img: Food1,
    },
    {
        id: 2,
        img: Food2,
    },
    {
        id: 3,
        img: Food3,
    },

];

const Header = () => {
    const [imageId, setImageId] =React.useState(Food1);
    return (
        <div className='min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 bg-cover bg-center flex items-center w-full overflow-hidden '
            style={{ backgroundImage: "url('/vector3.png')" }} id='Header'>
            <Navbar></Navbar>
            <div className='container pb-8 sm:pb-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <div 
                    data-aos='zoom-out'
                    data-aos-duration='400'
                    data-aos-once='true'

                    className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>Welcome to the Foodie Zone</h1>
                        <p className='text-md md:text-lg lg:text-xl '>Order food, Discover best restaurants near you. whenever in your cravings just come to Fodie Zone!.</p>
                        <div>
                            <button className='bg-gradient-to-r from-yellow-400 to-orange-700 text-white text-lg font-semibold px-4 items-center py-1 rounded-full hover:scale-105 duration-200'>Order Now
                                <FontAwesomeIcon icon={faCartShopping} className=' text-white drop-shadow-sm pl-2 cursor-pointer' />
                            </button>

                        </div>
                    </div>
                    <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[500px] flex justify-center items-center relative '>
                        <div className='flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden'>
                             <img
                              data-aos='zoom-out'
                              data-aos-duration='400'
                              data-aos-once='true'
                              src={imageId} alt=""  className='w-[300px] sm:w-[450px] mx-auto spin'/>
                        </div>
                        <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full'>
                            {
                                imageList.map((item)=>(
                                    <img
                                    data-aos='zoom-out'
                                    data-aos-duration='400'
                                    data-aos-once='true'
                                     key={item.id} src={item.img} className='max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200 cursor-pointer'
                                    onClick={
                                        ()=>{
                                            setImageId(item.id===1?Food1:item.id===2?Food2:Food3)
                                        }
                                    }/>

                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header