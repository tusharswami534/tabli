import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='relative bg-gray'>
      <div className='absolute 2xl:top-[-82%] xl:top-[-50%] md:top-[-30%] top-[-10%] left-0 w-full h-full '>
        <Image src="/assets/images/png/footer-top-layer.png" alt="Footer Image" width={1920} height={1080} className="w-full 2xl:h-[200px]"/>
      </div>
      <div className='max-w-[1920px] mx-auto relative'> 
        <div className='absolute 2xl:top-[-168%] xl:top-[-140%] lg:top-[-110%] md:top-[-60%] top-[-50%] sm:left-[9%] left-[14%] '>
          <Image src="/assets/images/webp/menu.webp" alt='menu' width={729} height={517} className='2xl:w-[729px] xl:w-[600px] lg:w-[500px] md:w-[300px] w-[236px]' />
        </div>
        <div className='bg-gray'>
          <div className="container mx-auto px-4 pt-20 pb-10">
            <Image src="/assets/images/png/footer-logo.png" alt='footer-logo' width={123} height={33} className='w-[123px]  pb-6 flex mx-auto' />
            <p className='text-base italic font-[900] text-white text-center'>Tutti i diritti riservati</p>

          </div>
        </div>
     </div>
    </div>
  )
}

export default Footer