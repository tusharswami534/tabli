import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='relative bg-'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <Image src="/assets/images/png/footer-top-layer.png" alt="Footer Image" width={1920} height={1080} className="w-full h-auto"/>
      </div>
      <div className="container mx-auto px-4 ">

      </div>
    </div>
  )
}

export default Footer