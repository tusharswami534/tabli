'use client'
import React from 'react'
import Nav from './Nav'
import Paragraph from '../custom-ui/Paragraph'
import CustomButton from '../custom-ui/CustomButton'
import Image from 'next/image'
import Icons from './icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Hero = () => {
  const path = usePathname()
  return (
    <div className={` pb-[72px] max-md:pb-0 relative px-4 overflow-hidden ${path === '/' ? 'bg-dark-blue' : '!bg-yellow'}`}>
      <Link className='absolute max-md:hidden bottom-4 left-1/2 -translate-x-1/2' href={'#come-funziona'}>
        <Icons icon='downArrow'/>
        </Link>
      <Nav />
      <div className='flex w-full py-[62px] max-md:pt-20 max-md:pb-0'>
        <div className='container max-w-[1600px] mx-auto'>
          <div className='flex items-center gap-5 max-lg:flex-col max-lg:gap-20 justify-between'>
            <div className='flex flex-col max-w-[726px]'>
              <h1 style={{textShadow: '0px 8px 16px 0px #00000029'}} className='text-80 max-xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-40 max-lg:text-center font-black italic text-white leading-131'>Tabli sta arrivando!</h1>
              <Paragraph paragraphText={'Stiamo per rivoluzionare il modo in cui acquisti prodotti e servizi nei tuoi luoghi preferiti.'} className={'mb-2 max-lg:text-center'}/>
              <Paragraph paragraphText={'Con Tabli, potrai consultare l’offerta, ordinare e pagare direttamente dal tuo smartphone, in totale autonomia e senza attese.'} className={'max-sm:hidden max-lg:text-center'}/>
              <div className='flex gap-4 mt-10 max-sm:flex-col max-lg:items-center max-lg:justify-center'>
                <CustomButton buttonName={'Come Funziona'} className={'max-w-[160px] leading-130 max-sm:max-w-[280px]  w-full'}/>
                <CustomButton buttonName={'Contatti'} className={'max-w-[160px] leading-130  max-sm:max-w-[280px] w-full !text-dark-blue !bg-white'}/>
              </div>  
            </div>
            <div className='gap-2.5 flex items-center'>
                <Image height={365} width={197} className='max-w-[365px] max-2xl!:w-[75%] max-xl:!w-[29%] max-sm:!w-[137px] max-sm:!h-[254px]' alt='mobile' src={'/assets/images/webp/first-mobile.webp'}/>
                <Image height={522} width={282} className='max-w-[522px] max-2xl!:w-[75%] max-xl:!w-[40%] max-sm:!w-[197px] max-sm:!h-[363px]' alt='mobile' src={'/assets/images/webp/second-mobile.webp'}/>
                <Image height={365} width={197} className='max-w-[365px] max-2xl!:w-[75%] max-xl:!w-[29%] max-sm:!w-[137px] max-sm:!h-[254px]' alt='mobile' src={'/assets/images/webp/third-mobile.webp'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

