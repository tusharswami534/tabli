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
    <div className={`pb-[72px] max-md:pb-0 relative ${path === '/' ? 'bg-dark-blue' : '!bg-yellow'}`}>
      <span className=" absolute right-0 z-[1] max-lg:hidden pointer-events-none top-[186px]"><Icons className={path === '/' ? 'stroke-yellow':  'stroke-dark-blue'} icon='heroRightVector' /></span>
      <span className=" absolute left-0 max-lg:hidden pointer-events-none top-[70%] -translate-y-1/2"><Icons className={path === '/' ? 'stroke-yellow':  'stroke-dark-blue'} icon='heroLeftVector' /></span>
      <span className=" absolute left-0 lg:hidden pointer-events-none top-[88px] w-full"><Icons className={'w-full'} icon='heroSmVector' /></span>
      <Nav />
      <div className='flex w-full relative pt-[62px] pb-[134px] max-md:pt-20 max-md:pb-0'>
        <Link className='absolute max-md:hidden bottom-4 left-1/2 -translate-x-1/2' href='#cosa-potrai'>
          <Icons icon='downArrow' className={`${path !== '/' && '!fill-dark-blue'}`} />
        </Link>
        <div className='container lg:px-4 max-w-[1632px] mx-auto'>
          <div className='flex items-center gap-5 max-lg:gap-0 max-[1100px]:flex-col justify-between'>
            <div className='flex flex-col max-w-[726px] max-lg:px-4 relative z-[2] w-full min-[1100px]:w-6/12'>
              <h1 className={`text-80 max-xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-40 max-[1100px]:text-center font-black italic leading-131 ${path === '/' ? 'text-white max-[1100px]:text-center hero-text ' : 'text-dark-grey'}`}>{path === '/' ? ' Tabli sta arrivando!' : 'Valorizza la tua attività con Tabli'}</h1>
              <Paragraph paragraphText={path === '/' ? 'Stiamo per rivoluzionare il modo in cui acquisti prodotti e servizi nei tuoi luoghi preferiti.' : 'Tabli è progettato per supportare ogni tipo di attività locale - dal bar all’hotel, dal lido alla piccola bottega - offrendo uno strumento semplice, versatile e pronto all’uso.'} className={`sm:mb-2  max-[1100px]:text-center ${path !== '/' && '!text-dark-grey max-[400px]:max-w-[345px] max-sm:py-4'}`} />
              <Paragraph paragraphText={path === '/' ? 'Con Tabli, potrai consultare l’offerta, ordinare e pagare direttamente dal tuo smartphone, in totale autonomia e senza attese.' : 'Permetti ai tuoi clienti di consultare i tuoi prodotti e servizi, ordinare o prenotare in autonomia, migliorando l’esperienza d’acquisto senza rivoluzionare la tua routine lavorativa.'} className={`max-sm:hidden max-[1100px]:text-center ${path !== '/' && '!text-dark-grey max-[400px]:max-w-[345px] max-sm:!flex'}`} />
              <div className='flex gap-4 mt-10 max-sm:flex-col max-[1100px]:items-center max-[1100px]:justify-center'>
                <CustomButton buttonName={'Come Funziona'} className={`max-w-[160px] whitespace-nowrap leading-119 max-sm:max-w-[280px] w-full hover:!bg-dark-grey hover:!text-white ${path !== '/' && '!text-white !bg-dark-blue'}`} />
                <CustomButton buttonName={'Contatti'} className={`max-w-[160px] whitespace-nowrap leading-119 max-sm:max-w-[280px] w-full border border-solid !text-dark-blue !bg-white ${path === '/' ? '!border-dark-blue hover:!text-white hover:!bg-dark-grey' : '!border-dark-blue hover:!bg-dark-grey hover:!text-white'}`} />
              </div>
            </div>
            <div className="w-full min-[1100px]:w-6/12 max-lg:mt-20">
              <div className="max-w-[700px] max-[1100px]:mx-auto ml-auto">
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
                            className="duration-400 w-[197px] hero-images h-[365px] max-sm:w-[137px] max-sm:h-[254px] relative"
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
