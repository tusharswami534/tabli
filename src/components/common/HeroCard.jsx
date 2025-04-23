'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const HeroCard = ({ title, description, icon }) => {
    const path = usePathname()
    return (
        <>
            <div>
                <div
                    className={`rounded-[20px] max-w-[330px] flex justify-center items-center flex-col min-h-[270px] relative p-2 shadow-[0px_8px_16px_0px_#00000029] ${path === '/' ? 'max-md:min-h-[170px]' : ''}`}
                >
                    <Image
                        src="/assets/images/webp/fram.webp"
                        alt="img"
                        width={30}
                        height={30}
                        className="absolute top-2 max-md:size-[20px] left-2"
                    />
                    <Image
                        src="/assets/images/webp/fram.webp"
                        alt="img"
                        width={30}
                        height={30}
                        className="absolute top-2 max-md:size-[20px] rotate-90 right-2 "
                    />
                    <Image
                        src="/assets/images/webp/fram.webp"
                        alt="img"
                        width={30}
                        height={30}
                        className="absolute bottom-2 max-md:size-[20px] rotate-180 right-2 "
                    />
                    <Image
                        src="/assets/images/webp/fram.webp"
                        alt="img"
                        width={30}
                        height={30}
                        className="absolute bottom-2 max-md:size-[20px] -rotate-90 left-2 "
                    />
                    <div className="xl:p-7 lg:p-3 p-2 flex justify-center items-center flex-col">
                        <Image src={icon} width={50} height={50} className='max-md:size-[38px] ' alt="icon" />
                        <h4 className={`text-26 mt-6 font-bold text-center max-w-[250px] ${path === '/' ? 'text-white max-lg:text-2xl max-md:text-xl max-sm:text-base' : 'text-dark-blue'}`}>
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