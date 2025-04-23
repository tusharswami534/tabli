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


const Hero = () => {
  const path = usePathname()
  return (
    <div className={` pb-[72px] max-md:pb-0 relative px-4 overflow-hidden ${path === '/' ? 'bg-dark-blue' : '!bg-yellow'}`}>
      <Link className='absolute max-md:hidden bottom-4 left-1/2 -translate-x-1/2' href={'#come-funziona'}>
        <Icons icon='downArrow' />
      </Link>
      <Nav />
      <div className='flex w-full py-[62px] max-md:pt-20 max-md:pb-0'>
        <div className='container max-w-[1600px] mx-auto'>
          <div className='flex items-center gap-5 max-lg:flex-col justify-between'>
            <div className='flex flex-col max-w-[726px] w-full lg:w-6/12'>
              <h1 style={{ textShadow: '0px 8px 16px 0px #00000029' }} className={`text-80 max-xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-40 max-lg:text-center font-black italic leading-131 ${path === '/' ? 'text-white' : 'text-dark-grey'}`}>{path === '/' ? ' Tabli sta arrivando!' : 'Valorizza la tua attività con Tabli'}</h1>
              <Paragraph paragraphText={path === '/' ? 'Stiamo per rivoluzionare il modo in cui acquisti prodotti e servizi nei tuoi luoghi preferiti.' : 'Tabli è progettato per supportare ogni tipo di attività locale - dal bar all’hotel, dal lido alla piccola bottega - offrendo uno strumento semplice, versatile e pronto all’uso.'} className={`mb-2 max-lg:text-center ${path !== '/' && '!text-dark-grey'}`} />
              <Paragraph paragraphText={path === '/' ? 'Con Tabli, potrai consultare l’offerta, ordinare e pagare direttamente dal tuo smartphone, in totale autonomia e senza attese.' : 'Permetti ai tuoi clienti di consultare i tuoi prodotti e servizi, ordinare o prenotare in autonomia, migliorando l’esperienza d’acquisto senza rivoluzionare la tua routine lavorativa.'} className={`max-sm:hidden max-lg:text-center ${path !== '/' && '!text-dark-grey'}`} />
              <div className='flex gap-4 mt-10 max-sm:flex-col max-lg:items-center max-lg:justify-center'>
                <CustomButton buttonName={'Come Funziona'} className={`max-w-[160px] leading-130 max-sm:max-w-[280px] w-full ${path !== '/' && '!text-white !bg-dark-blue'}`} />
                <CustomButton buttonName={'Contatti'} className={`max-w-[160px] leading-130 border-transparent max-sm:max-w-[280px] w-full border border-solid !text-dark-blue !bg-white ${path === '/' ?   '!border-dark-blue' : '!border-transparent'}`} />
              </div>
            </div>
            <div className="w-full lg:w-6/12 max-lg:mt-20">
            <div className="max-w-[700px] max-lg:mx-auto ml-auto">
              <Swiper
                slidesPerView={2.5}
                spaceBetween={24}
                centeredSlides={true}
                loop={true}
                breakpoints={{
                  439: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                  },
                }}
                className="mySwiper hero-slider py-10"
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
                          className="duration-400 relative"
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
    </div>
  )
}

export default Hero

