import React from 'react'
import Image from 'next/image'
import { VANTAGGI_LIST } from '../../utils/helper'
import Heading from '../custom-ui/Heading'
const VantaggiAttività = () => {

    return (
        <div className='bg-dark-blue relative pt-10 '>
            <Image src="/assets/images/webp/outline.webp" alt='outline' width={1920} height={1080} className='w-full absolute 2xl:bottom-[-16%] min-[1200px]:-bottom-[21%] z-20  h-auto xl:block hidden min-[2000px]:!bottom-[-45%]' />
            <Image src="/assets/images/webp/tabli-name.webp" alt='tabli name' width={585} height={158} className=' absolute min-[2000px]:!left-[45%] lg:top-[-23%] md:top-[-19%] top-[-10%] xl:left-[30%] lg:left-[18%] md:left-[10%] left-[9%] max-w-[585px] mx-auto w-full max-md:w-[292px]' />
            <Image className='absolute lg:top-[-16%] sm:-top-[13%] -top-[7%] sm:h-[152px] h-[88px] w-full' src="/assets/images/png/attivita-top-layer.png" alt='top-layer' width={1920} height={152} />
            <Image className='absolute lg:-bottom-[15%] z-10 md:-bottom-[12%] -bottom-[8%] w-full md:h-[152px] h-[88px]' src="/assets/images/webp/attivita-bottom-layer.webp" alt='bottom-layer' width={1920} height={152} />
            <Image src="/assets/images/webp/tabli-yellow .webp" alt='tabli name' width={585} height={158} className=' absolute lg:bottom-[-8%] md:bottom-[-9%] bottom-[-5%] xl:left-[30%] lg:left-[18%] md:left-[10%] left-[9%] max-w-[585px] mx-auto w-full max-[768px]:top-[90%] max-[650px]:top-[95%] max-[400px]:top-[100%] z-20 max-sm:w-[292px] min-[2000px]:!left-[45%]' />

            <div className="max-w-[1408px] mx-auto px-6">
                <Heading headingText="Vantggi per le tau Attivita" className="!text-center max-lg:!text-40 !leading-normal !text-yellow" />
                <div className="flex max-lg:flex-col lg:justify-between relative z-30 max-lg:justify-center md:pt-10 2xl:pb-[200px] md:pb-[140px] pb-20 max-w-[1408px] mx-auto  max-sm:pb-14">
                    <Image className='xl:max-w-[750px] max-w-[540px] max-lg:mx-auto w-full xl:h-[534px]' src="/assets/images/webp/attivita-image.webp" alt="attivita" width={800.6} height={534} />
                    <div className='xl:pt-[92px] md:pt-10 pt-4'>
                        <h3 className='lg:max-w-[384px] max-w-none text-32 text-white font-black xl:pb-10 pb-6 max-sm:text-center leading-130 italic'>
                            Più tempo per gestire, meno tempo perso
                        </h3>
                        <div>
                            {VANTAGGI_LIST.map((vantaggio, index) => (
                                <div key={index} className='flex gap-2 pb-4 items-center'>
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
