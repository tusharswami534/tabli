import React from 'react'
import Image from 'next/image'
import { FUNZIONALITA_LIST } from '../../utils/helper'
import Heading from '../custom-ui/Heading'
const FunzionalitaPrincipali = () => {
  return (
    <div className='bg-yellow xl:pb-[180px] md:pb-[150px] pb-30 2xl:pt-[260px] md:pt-[130px] pt-[160px] relative'>
      <Image className='absolute 2xl:top-[16%] min-[1200px]:top-[27%] min-[1200px]:h-[830px] h-auto max-2xl:w-full xl:block hidden min-[2000px]:left-[5%]' src="/assets/images/png/Funzionalità-layer.png" alt='top-layer' width={1920} height={152} />
      <div className="max-w-[1560px] mx-auto pb-10 px-[26px]">
        <Heading headingText="Funzionalità Principali" className="!text-center !text-dark-grey max-lg:!text-40 !leading-130 !pb-4" />

        <h5 className='font-black md:text-32 text-26 text-center !text-dark-grey italic leading-130'>Tutti gli strumenti di cui hai bisogno, in un’unica piattaforma.</h5>
        <div className="flex max-xl:flex-wrap justify-center pt-20 2xl:gap-[27px] min-[1300px]:gap-[30px] gap-[50px]">
          {FUNZIONALITA_LIST.map((feature, index) => (
            <div key={index} className='rounded-[20px] bg-white p-6 relative min-h-[267px] transition-all duration-300 hover:shadow-xl hover:z-10'>
              <Image
                className={`${feature.imgStyle} size-[160px]`}
                src={feature.icon}
                alt='feature-icon'
                width={160}
                height={160}
              />
              <h5 className='text-dark-blue text-xl font-bold md:max-w-[212px] max-w-none pt-[83px] pb-2'>
                {feature.title}
              </h5>
              <p className='font-medium text-base md:max-w-[212px] max-w-none text-dark-grey'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FunzionalitaPrincipali
