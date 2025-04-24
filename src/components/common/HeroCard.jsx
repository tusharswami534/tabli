'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const HeroCard = ({ title, description, icon }) => {
    const path = usePathname()
    return (
        <>
            <div className={`${path === '/' ? '' : 'flex justify-center'}`}>
                <div
                    className={`rounded-[20px] flex justify-center items-center transition-all duration-300 flex-col min-h-[270px] relative p-2 shadow-[0px_8px_16px_0px_#00000029] ${path === '/' ? 'max-md:min-h-[170px] max-w-[330px] bg-light-blue  ease-linear hover:shadow-[0px_5px_30px_-5px_#fff]' : 'bg-white h-full max-sm:h-[275px] w-full max-sm:!max-w-[340px]'}`}
                >
                    <Image
                        src="/assets/images/webp/fram.webp"
                        alt="img"
                        width={30}
                        height={30}
                        className={`absolute top-2 left-2 ${path === '/' && ' max-md:size-[20px]' }`}
                    />
                    <Image
                        src="/assets/images/webp/fram.webp"
                        alt="img"
                        width={30}
                        height={30}
                        className={`absolute top-2 rotate-90 right-2  ${path === '/' && ' max-md:size-[20px]' }`}
                    />
                    <Image
                        src="/assets/images/webp/fram.webp"
                        alt="img"
                        width={30}
                        height={30}
                        className={`absolute bottom-2 rotate-180 right-2 ${path === '/' && ' max-md:size-[20px]' } `}
                    />
                    <Image
                        src="/assets/images/webp/fram.webp"
                        alt="img"
                        width={30}
                        height={30}
                        className={`absolute bottom-2 -rotate-90 left-2 ${path === '/' && ' max-md:size-[20px]' }`}
                    />
                    <div className="xl:p-7 lg:p-3 p-2 flex justify-center items-center flex-col">
                        <Image src={icon} width={50} height={50} className='max-md:size-[38px] ' alt="icon" />
                        <h4 className={`text-26 font-bold leading-131 text-center max-w-[250px] ${path === '/' ? 'text-white max-sm:font-medium max-lg:text-2xl max-md:text-xl max-sm:text-base mt-6 max-md:mt-5 max-sm:mt-4' : 'text-dark-blue italic mt-2'}`}>
                            {title}
                        </h4>
                        {path !== '/' && (<p className="text-base max-w-[260px] text-[#363B3C] font-medium text-center mt-2">
                            {description}
                        </p>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroCard