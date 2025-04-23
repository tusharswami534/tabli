'use client'
import React from 'react'
import Image from 'next/image'
import Heading from '../custom-ui/Heading'
import Paragraph from '../custom-ui/Paragraph'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { BENEFITS_LIST } from '../../utils/helper'

const VantaggiPerTe = () => {
  return (
    <div>
      <Image className='w-full max-w-[292px] sm:max-w-[400px] xl:max-w-[585px] absolute -translate-x-[50%] left-[50%] -top-0 lg:-top-4 z-50' height={158} width={585} src={'/assets/images/png/yellow-3-tabli.png'} alt='top layer' />
      <Image className='w-full object-cover' height={217} width={1920} src={'/assets/images/png/benefits-top-layer.png'} alt='top layer' />
      <div className="bg-yellow translate-y-[-1px] pb-14 md:pb-[60px] max-md:pb-20">
        <div className="md:py-10 py-6">
          <Heading className='text-center' headingText='Vantaggi per Te' />
        </div>
        <div className="max-w-[1560px] items-center justify-center overflow-x-auto scrollbar-hide mx-auto flex">
          <div className="flex items-center justify-center max-2xl:hidden gap-x-3 py-[89px] h-[588px] ">
            {BENEFITS_LIST.map((item, index) => (
              <div key={index} className="bg-white group rounded-3xl transition-all duration-300 overflow-hidden  hover:w-[300px] w-[240px]">
                <Image className='w-[240px] h-[300px] group-hover:w-[300px] transition-all duration-300' height={300} width={240} src={item.image} alt='benefits' />
                <div className="flex flex-col py-6 px-4 gap-2">
                  <p className='text-dark-blue font-bold leading-100 text-xl text-center'>{item.title}</p>
                  <div className="h-0 overflow-hidden group-hover:h-[176px] transition-all duration-300 flex flex-col gap-2">
                    <Paragraph className='!text-light-gray !leading-[130%]' paragraphText={item.description} />
                    <Paragraph className='!text-light-gray !leading-[130%]' paragraphText={item.descriptionTwo} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="2xl:hidden overflow-hidden">
          <Swiper
            spaceBetween={12}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerGroup={1}
            breakpoints={{
              1100: {
                slidesPerView: 4, centeredSlides: false,
              },
              1024: {
                slidesPerView: 3, centeredSlides: false,
              },
              768: {
                slidesPerView: 2.2, spaceBetween: 30,
              },
              640: { slidesPerView: 1.6 },
              320: {
                slidesPerView: 1.3,
                centeredSlides: true,
              },
            }}
            className="flex items-center justify-center max-w-[1320px] mx-auto py-[89px] pb-[40px]">
            {BENEFITS_LIST.map((item, index) => (
              <SwiperSlide key={index} className="bg-white group rounded-3xl transition-all duration-300 overflow-hidden max-w-[300px] w-full">
                <Image className='w-[300px] max-md:h-[300px]' height={300} width={240} src={item.image} alt='benefits' />
                <div className="flex flex-col py-6 px-4 gap-2">
                  <p className='text-dark-blue font-bold leading-100 text-xl'>{item.title}</p>
                  <Paragraph className='!text-light-gray !leading-[130%]' paragraphText={item.description} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div >
  )
}

export default VantaggiPerTe