import React from 'react'
import Img2 from '../assets/biryani2.png';
import Img3 from '../assets/chicken_curry.jpg';
import Img4 from '../assets/cold_coffee.jpg';

const ServicesData = [
    {
        id: 1,
        img: Img2,
        names: "Biryani",
        description:
            "Aromatic long-grain rice, perfectly layered over succulent chicken marinated in a blend of earthy, aromatic spices, garnished with caramelized onions and delicate strands of saffron. Each bite bursts with the vibrant flavors of India.",
    },
    {
        id: 2,
        img: Img3,
        names: "Chiken curry",
        description:
            "This Indian-inspired creamy chicken curry recipe is similar to a curry I had in India. The aromatic spices and flavors are a delight to the senses! Delicious with fresh naan and basmati rice.",
    },
    {
        id: 3,
        img: Img4,
        names: "Cold Cofee",
        description:
            "Cafe Style Cold Coffee with just 4 ingredients. Creamy, frothy and delicious cold coffee can made in just 10 minutes and you will love it.",
    },
];

const Services = () => {
    return (
        <div className='py-10' id='About'>
            <div className='container'>
                <div className='text-center mb-20 max-w-[400px] md:max-w-[600px] mx-auto'>
                    <p className='text-md lg:text-lg lg:font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-800'>Our Services</p>
                    <h1 className='text-3xl font-bold'>Services</h1>
                    <p className='text-sm text-gray-500'>{" "}
                        To ensure you are set up for success from the very beginning, we have introduced a customised training and immersion programme, tailor-made to the ever evolving need of the business and technology. This comprehensive programme will cover a spectrum of technical concepts, language skills and real world problem solving case studies. We believe this will provide you with a holistic understanding of the responsibilities associated with the role and will propel you in your developer journey far beyond.Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this.".

                    </p>

                </div>
                <div className='items-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24     place-items-center'>
                        {ServicesData.map(({ id, img, names, description }) => {
                            return (
                                <div 
                                data-aos='zoom-out'
                                    data-aos-duration='400'
                                key={id} className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:text-yellow-400   hover:bg-primary hover:text-white duration-300 p-4 shadow-xl'>
                                    <div className='h-[100px] pt-4' >
                                        <img src={img} className='max-w-[150px] mx-auto block transform -translate-y-20 group-hover:scale-105 group-hover:rotate-6 duration-300'></img>
                                    </div>
                                    <div className='p-4 text-center'>
                                        <h1 className='text-xl font-bold'>{names}</h1>
                                        <p className='text-gray-600 text-sm line-clamp-2 group-hover:text-white duration-300 dark:text-yellow-400 '>{description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services