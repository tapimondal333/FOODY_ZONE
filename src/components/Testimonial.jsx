import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,

  };
  const testimonialData = [
    {
      id: 1,
      name: "Samuel",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 1,
      name: "Smith",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/103/103",
    },
  ];

  return (

    <div className='py-10' id='Testimonial'>
      <div className='container'>
        <div className='text-center mb-20 max-w-[400px] md:max-w-[600px] mx-auto'>
          <p className='text-md lg:text-lg lg:font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-800'>What our Customer Say about Us.</p>
          <h1 className='text-3xl font-bold'>Testimonil</h1>
          <p className='text-sm text-gray-500'>{" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae consequuntur harum, at, ipsum minus molestias dolorem quidem doloremque nulla similique dignissimos obcaecati delectus in eligendi blanditiis distinctio sed deserunt culpa.

          </p>

        </div>
        <div className='grid grid-cols-1 max-w-[700px] mx-auto gap-6'>
          <Slider {...settings}>
          {
              testimonialData.map((id)=>(
                <div key={id} className='my-6'>
                  
                    <div className='flex flex-col justify-center items-center p-4
                 text-center gap-4 shadow-lg mx-4 rounded-xl dark:bg-gray-800 bg-yellow-200 relative'>
                    <img src={id.img} alt="" className='rounded-full block mx-auto' />
                  
                  
                  <p className='text-gray-700 text-sm dark:text-gray-200'>{id.text}</p>
                  <h1 className='text-xl font-bold dark:text-gray-300'>{id.name}</h1>
                  <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                  
                    </div>
                  
                </div>
              ))

            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial