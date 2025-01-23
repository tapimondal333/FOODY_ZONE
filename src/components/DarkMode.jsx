import React, { useState } from 'react'
import darkPng from '../assets/dark-mode-button.png'
import lightPng from '../assets/light-mode-button.png'

const DarkMode = () => {
  const [theme,setTheme]=React.useState
  (localStorage.getItem('theme')?localStorage.getItem('theme'):'light');
  const element = document.documentElement;
  React.useEffect(()=>{
    if(theme ==='dark'){
      element.classList.add('dark');
      localStorage.setItem('theme','dark');

    }
    else{
      element.classList.remove('dark');
      localStorage.setItem('theme','light')
    }
  },[theme]);
  const changeTheme = ()=>{
    if(theme === 'light'){
      setTheme('dark');

    }
    else{
      setTheme('light')
    }
  };
  return (
   <>
    <div className='relative'>
        <img src={darkPng} alt="" onClick={changeTheme}  className={theme==='dark' ? 'w-12  right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300':'hidden'}/>
        <img src={lightPng} alt="" onClick={changeTheme}  className={theme==='light' ? 'w-12  right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300':'hidden'}/>
    </div>
    </>
  )
}

export default DarkMode