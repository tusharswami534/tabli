import React from 'react'
import Image from 'next/image'
import { VANTAGGI_LIST } from '../../utils/helper'
import Heading from '../custom-ui/Heading'
const VantaggiAttività = () => {

    return (
        <div className='bg-dark-blue relative pt-4 sm:pt-10 2xl:pt-4 '>
            <Image src="/assets/images/png/attivita-left-layer.png" alt='tabli name' width={685} height={1258} className=' absolute z-30 2xl:max-w-[680px] max-w-[500px] 2xl:min-h-[1250px] xl:block !overflow-hidden hidden min-h-[900px] left-0' />
            <Image src="/assets/images/png/attivita-right-layer.png" alt='tabli name' width={920} height={1258} className='min-[1720px]:!max-w-[920px] 2xl:max-w-[770px] xl:max-w-[620px] xl:block hidden !overflow-hidden min-h-[950px] h-auto absolute z-20 right-0 top-[19%]' />
            <Image src="/assets/images/webp/tabli-name.webp" alt='tabli name' width={585} height={158} className=' absolute  lg:top-[-23%] md:top-[-19%] top-[-11%] left-1/2 -translate-x-1/2 max-w-[585px] mx-auto w-full max-md:w-[292px]' />
            <Image className='absolute lg:top-[-16%] sm:-top-[13%] -top-[7%] sm:h-[152px] h-[68px] w-full' src="/assets/images/png/attivita-top-layer.png" alt='top-layer' width={1920} height={152} />
            <Image className='absolute lg:-bottom-[15%] z-10 md:-bottom-[12%] -bottom-[8%] w-full md:h-[152px] h-[88px]' src="/assets/images/webp/attivita-bottom-layer.webp" alt='bottom-layer' width={1920} height={152} />
            <Image src="/assets/images/webp/tabli-yellow .webp" alt='tabli name' width={585} height={158} className=' absolute lg:bottom-[-11%] md:bottom-[-9%] bottom-[-5%] max-w-[585px] max-md:w-[292px] mx-auto w-full max-[768px]:top-[90%] max-[650px]:top-[95%] max-[400px]:top-[98%] z-20 max-sm:w-[292px] left-1/2 -translate-x-1/2' />
            <div className="max-w-[1408px] mx-auto px-6">
                <Heading headingText="Vantggi per le tau Attivita" className="!text-center max-lg:!text-40 !leading-normal !text-yellow max-sm:!pb-4 !drop-shadow-heading" />
                <div className="flex max-lg:flex-col lg:justify-between relative z-30 max-lg:justify-center md:pt-10 2xl:pb-[200px] md:pb-[140px] pb-20 max-w-[1408px] mx-auto  max-sm:pb-14">
                    <Image className='xl:max-w-[750px] max-w-[540px] max-lg:mx-auto pointer-events-none w-full xl:h-[534px] 2xl:-ml-[67px]' src="/assets/images/webp/attivita-image.webp" alt="attivita" width={800.6} height={534} />
                    <div className='xl:pt-[92px] md:pt-10 pt-4'>
                        <h3 className='lg:max-w-[384px] max-w-none text-32  max-lg:!text-center text-white font-black xl:pb-10 pb-6 max-sm:text-center leading-130 italic'>
                            Più tempo per gestire, meno tempo perso
                        </h3>
                        <div className='max-w-[600px] mx-auto'>
                            {VANTAGGI_LIST.map((vantaggio, index) => (
                                <div key={index} className='flex gap-2 pb-4 items-center '>
                                    <Image className='size-5' src="/assets/images/png/yellow-tick.png" alt='yellow-tick' width={20} height={19} />
                                    <p className='font-medium text-base text-white max-w-[506px]'>{vantaggio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VantaggiAttività
