"use client";


import Image from 'next/image'
import  CustomButton  from './CustomButton'

const Hero = () => {
  const handleScroll = () => {
    
  }

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className="hero__title">
          Find, book , or rent a car - quickly and easily!
        </h1>

        <p className="hero__subtitle">
          We have the best cars for you to choose from. Book now!
        </p>

        <CustomButton 
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white mt-10 rounded-full"
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container max-md:hidden'>
        <div className='hero__image'>
          <Image src="/hero.png" alt='hero'
            fill className='object-contain'/>
        </div>
        <div className='hero__image-overlay'></div>
      </div>
    </div>
  )
}

  export default Hero