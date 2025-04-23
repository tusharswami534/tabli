import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='relative bg-gray max-sm:pt-14'>
      <div className='absolute 2xl:top-[-82%] xl:top-[-50%] md:top-[-30%] top-[-10%] left-0 w-full h-full '>
        <Image src="/assets/images/png/footer-top-layer.png" alt="Footer Image" width={1920} height={1080} className="w-full 2xl:h-[200px]"/>
      </div>
      <div className='max-w-[1920px] mx-auto '> 
        <div className='bg-gray'>
          <div className="container mx-auto px-4 pt-20 pb-10">
            <Link href="/" className='flex justify-center'>
              <Image src="/assets/images/png/footer-logo.png" alt='footer-logo' width={123} height={33} className='w-[123px]  pb-6 flex mx-auto' />
            </Link>
            <p className='text-base italic font-[900] text-white text-center'>Tutti i diritti riservati</p>
          </div>
        </div>
     </div>
    </div>
  )
}
export default Footer