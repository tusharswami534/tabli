'use client'
import React from 'react'
import Image from 'next/image'
import Heading from '../custom-ui/Heading'
import Paragraph from '../custom-ui/Paragraph'
import { BENEFITS_LIST } from '@/utils/helper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
const VantaggiPerTe = () => {
  return (
    <div>
      <Image className='w-full object-cover' height={217} width={1920} src={'/assets/images/png/benefits-top-layer.png'} alt='top layer' />
      <div className="bg-yellow translate-y-[-1px] pb-[180px]">
        <div className="py-10">
          <Heading className='text-center' headingText='Vantaggi per Te' />
        </div>
        <div className="max-w-[1580px] mx-auto flex items-center justify-center">
          <div className="flex items-center justify-center max-2xl:hidden gap-x-3 py-[89px] h-[588px] ">
            {BENEFITS_LIST.map((item, index) => (
              <div key={index} className="bg-white group rounded-3xl transition-all duration-300 overflow-hidden hover:max-w-[300px] max-w-[240px] w-full">
                <Image className='w-[240px] h-[300px] group-hover:w-[300px] transition-all duration-300' height={300} width={240} src={item.image} alt='benefits' />
                <div className="flex flex-col py-6 px-4 gap-2">
                  <p className='text-dark-blue font-bold leading-100 text-xl text-center'>{item.title}</p>
                  <div className="h-0 overflow-hidden group-hover:h-[176px] transition-all duration-300 flex flex-col gap-2">
                    <Paragraph className='!text-gray !leading-[130%]' paragraphText={item.description} />
                    <Paragraph className='!text-gray !leading-[130%]' paragraphText={item.descriptionTwo} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="2xl:hidden overflow-hidden">
            <Swiper
              spaceBetween={12}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              centeredSlides={true}
              centeredSlidesBounds={true}
              loop={true}
              slidesOffsetBefore={20}
              slidesOffsetAfter={20}
              breakpoints={{
                1024: { slidesPerView: 4 },
                768: { slidesPerView: 2.2, spaceBetween: 30 },
                640: { slidesPerView: 1.6 },
                320: { slidesPerView: 1.2 },
              }}
              className="flex items-center justify-center max-w-[1240px] mx-auto py-[89px] pb-[40px]"
            >
              {BENEFITS_LIST.map((item, index) => (
                <SwiperSlide key={index} className="bg-white group rounded-3xl transition-all duration-300 overflow-hidden max-w-[300px] w-full">
                  <Image className='w-[300px] max-md:h-[300px]' height={300} width={240} src={item.image} alt='benefits' />
                  <div className="flex flex-col py-6 px-4 gap-2">
                    <p className='text-dark-blue font-bold leading-100 text-xl'>{item.title}</p>
                    <Paragraph className='!text-gray !leading-[130%]' paragraphText={item.description} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div >
  )
}

export default VantaggiPerTe