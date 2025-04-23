import React from 'react'
import Image from 'next/image'
import { CONTENT_LIST } from '../../utils/helper'
import Heading from '../custom-ui/Heading'
const SoluzioniMigliorare = () => {
  return (
    <div>
      <div className="bg-dark-blue relative -mt-1 md:pt-10">
        <Image className="absolute lg:-top-[13%] md:-top-[8%] -top-[5%] md:h-[136px] h-[94px] w-full" src="/assets/images/png/Soluzioni-top-layer.png" alt="top-layer" width={1920} height={136} />
        <Image className="absolute 2xl:-bottom-[12%] lg:-bottom-[16%] md:-bottom-[10%] md:h-[136px] h-[94px] max-[765px]:-bottom-[8%] max-[450px]:-bottom-[6%] w-full" src="/assets/images/png/Soluzioni-bottom-layer.png" alt="bottom-layer" width={1920} height={152} />
        <Image className="absolute h-auto left-0 w-[260px] xl:block hidden top-[5%]" src="/assets/images/png/soluzioni-left-layer.png" alt="top-layer" width={1920} height={136} />
        <Image className="absolute h-auto right-0 2xl:max-w-[379px] max-w-[250px] xl:block hidden" src="/assets/images/png/soluzioni-right-layer.png" alt="bottom-layer" width={1920} height={152} />
        <div className="max-w-[1560px] mx-auto px-4">
          <div className="flex max-lg:flex-col lg:gap-20 gap-10 max-xl:justify-center pt-10 lg:pb-[100px] mb:pb-20 relative z-10 max-w-[1408px] mx-auto">
            <Image className="xl:max-w-[656px] xl:h-[640px] lg:max-w-[427px] md:max-w-[467px] max-w-[350px] w-full md:h-[500px] max-lg:mx-auto" src="/assets/images/webp/soluzioni.webp" alt="soluzioni-image" width={656} height={640} />
            <div>
              <Heading headingText="  Soluzioni per migliorare il tuo lavoro" className="!text-center lg:!max-w-[465px] max-lg:!text-center max-sm:!text-left !max-w-none max-lg:!text-40 !leading-130 !text-yellow xl:!pb-10 !pb-6" />

              <div>
                {CONTENT_LIST.map((item, index) => (
                  <div key={index} className="xl:pb-8 pb-5">
                    <h4 className="text-26 font-bold text-white italic max-lg:text-center max-sm:text-left max-sm:pb-3 !leading-130">
                      {item.title}
                    </h4>
                    <p className="font-medium text-base text-white !leading-130 xl:max-w-[520px] max-w-[800px] mx-auto max-lg:text-center max-sm:text-left">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoluzioniMigliorare
