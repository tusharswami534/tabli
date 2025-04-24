'use client'
import React, { useRef, useState } from "react";
import Nav from './Nav'
import Paragraph from '../custom-ui/Paragraph'
import CustomButton from '../custom-ui/CustomButton'
import Icons from './icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { HERO_SWIPER_DATA } from "src/utils/helper";
import Image from "next/image";
import HeroCardData from "./HeroCardData";
import { Autoplay } from 'swiper/modules';


const Hero = () => {
  const path = usePathname()
  return (
    <div className={` pb-[72px] max-md:pb-0 overflow-hidden relative ${path === '/' ? 'bg-dark-blue' : '!bg-yellow'}`}>
      <span className=" absolute right-0 max-lg:hidden pointer-events-none top-[186px]"><Icons className={path !== '/' && 'stroke-dark-blue'} icon='heroRightVector' /></span>
      <span className=" absolute left-0 max-lg:hidden pointer-events-none top-[75%] -translate-y-1/2"><Icons className={path !== '/' && 'stroke-dark-blue'} icon='heroLeftVector' /></span>
      <span className=" absolute left-0 lg:hidden pointer-events-none top-[88px] w-full"><Icons className={'w-full'} icon='heroSmVector' /></span>
      <Nav />
      <div className='flex w-full relative pt-[62px] pb-[134px] max-md:pt-20 max-md:pb-0'>
        <Link className='absolute max-md:hidden bottom-4 left-1/2 -translate-x-1/2' href={'#cosa-potrai'}>
          <Icons icon='downArrow' />
        </Link>
        <div className='container lg:px-4 max-w-[1632px] mx-auto'>
          <div className='flex items-center gap-5 max-lg:gap-0 max-lg:flex-col justify-between'>
            <div className='flex flex-col max-w-[726px] max-lg:px-4 w-full lg:w-6/12'>
              <h1 className={`text-80 max-xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-40 max-lg:text-center font-black italic leading-131 ${path === '/' ? 'text-white hero-text ' : 'text-dark-grey'}`}>{path === '/' ? ' Tabli sta arrivando!' : 'Valorizza la tua attività con Tabli'}</h1>
              <Paragraph paragraphText={path === '/' ? 'Stiamo per rivoluzionare il modo in cui acquisti prodotti e servizi nei tuoi luoghi preferiti.' : 'Tabli è progettato per supportare ogni tipo di attività locale - dal bar all’hotel, dal lido alla piccola bottega - offrendo uno strumento semplice, versatile e pronto all’uso.'} className={`sm:mb-2 max-lg:text-center ${path !== '/' && '!text-dark-grey'}`} />
              <Paragraph paragraphText={path === '/' ? 'Con Tabli, potrai consultare l’offerta, ordinare e pagare direttamente dal tuo smartphone, in totale autonomia e senza attese.' : 'Permetti ai tuoi clienti di consultare i tuoi prodotti e servizi, ordinare o prenotare in autonomia, migliorando l’esperienza d’acquisto senza rivoluzionare la tua routine lavorativa.'} className={`max-sm:hidden max-lg:text-center ${path !== '/' && '!text-dark-grey'}`} />
              <div className='flex gap-4 mt-10 max-sm:flex-col max-lg:items-center max-lg:justify-center'>
                <CustomButton buttonName={'Come Funziona'} className={`max-w-[160px] leading-119 max-sm:max-w-[280px] w-full hover:!bg-white hover:!text-dark-blue ${path !== '/' && '!text-white !bg-dark-blue'}`} />
                <CustomButton buttonName={'Contatti'} className={`max-w-[160px] leading-119 border-transparent max-sm:max-w-[280px] w-full border border-solid !text-dark-blue !bg-white ${path === '/' ? '!border-dark-blue hover:!bg-yellow' : '!border-transparent hover:!bg-dark-blue hover:!text-white'}`} />
              </div>
            </div>
            <div className="w-full min-[1025px]:w-6/12 max-lg:mt-20">
              <div className="max-w-[700px] max-lg:mx-auto ml-auto">
                <Swiper
                  slidesPerView={2.5}
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  loop={true}
                  breakpoints={{
                    439: {
                      slidesPerView: 3,
                      spaceBetween: 25,
                    },
                  }}
                  className="mySwiper hero-slider cursor-grab py-10"
                >
                  {HERO_SWIPER_DATA.map((obj, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="py-14 xl:py-[79px] flex justify-end">
                          <Image
                            src={obj.image}
                            alt="hero-image"
                            width={197}
                            height={365}
                            sizes="100vw"
                            className="duration-400 w-[197px] h-[365px] max-sm:w-[137px] max-sm:h-[254px] relative"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroCardData />
    </div>
  )
}

export default Hero
