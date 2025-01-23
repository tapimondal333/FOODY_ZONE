import React from 'react'

import Header from './components/Header'
import Services from './components/Services'
import Banner from './components/Banner'
import Appstore from './components/Appstore'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import "aos/dist/aos.css";
import Aos from 'aos'

const App = () => {
  React.useEffect(()=>{
    Aos.init({
      offset:100,
      duration:500,
      easing:"ease-in-shine",
      delay:100,
    });
    Aos.refresh();
  },[]);
  return (
    <div className='w-full overflow-hidden'>
      <Header></Header>
      <Services></Services>
      <Banner></Banner>
      <Appstore></Appstore>
      <Testimonial></Testimonial>
      <Footer></Footer>

    </div>
  )
}

export default App