import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='relative bg-gray'>
      <div className='absolute 2xl:top-[-82%] xl:top-[-50%] md:top-[-30%] top-[-25%] left-0 w-full h-full pointer-events-none'>
        <Image src="/assets/images/png/footer-top-layer.png" alt="Footer Image" width={1920} height={1080} className="2xl:h-[200px] w-full max-xl:w-[1920px] pointer-events-none max-sm:object-cover"/>
      </div>
      <div className='max-w-[1920px] mx-auto '> 
        <div className='bg-gray'>
          <div className="container mx-auto px-4 py-7 sm:pt-20 sm:pb-10">
           <Link href={'/'}> <Image src="/assets/images/png/footer-logo.png" alt='footer-logo' width={123} height={33} className='w-[123px] pb-2 sm:pb-6 flex mx-auto' /></Link>
            <p className='text-base italic font-[700] text-white text-center'>Tutti i diritti riservati</p>
          </div>
        </div>
     </div>
    </div>
  )
}
export default Footer