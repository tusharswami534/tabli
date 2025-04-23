import React from 'react'
import Image from 'next/image'
const VantaggiAttività = () => {
  return (
      <div className='bg-dark-blue relative pt-10'>
          <Image className='absolute top-[20%] right-0 z-30 xl:block hidden ' src="/assets/images/png/attivita-right-layer.png" alt='left-layer' width={900} height={900} />
          <Image className='absolute top-[10%] z-30 xl:block hidden ' src="/assets/images/png/attivita-left-layer.png" alt='left-layer' width={600} height={600}/>
          <Image className='absolute lg:-top-[18%] -top-[13%] h-[152px] w-full' src="/assets/images/png/attivita-top-layer.png" alt='top-layer' width={1920} height={152} />
          <Image className='absolute lg:-bottom-[14%] z-10 md:-bottom-[12%] -bottom-[8%] w-full md:h-[152px] h-[130px]' src="/assets/images/png/attivita-bottom-layer.png" alt='bottom-layer' width={1920} height={152} />
          <div className="max-w-[1560px] mx-auto px-4">
              <h2 className='text-[#FFDC64] text-center text-[40px] font-black'>
                  Vantggi per le tau Attivita
              </h2>
              <div className="flex max-lg:flex-col lg:justify-between max-lg:justify-center pt-10 pb-[100px] max-w-[1408px] mx-auto">
                   <Image className='xl:max-w-[750px] max-w-[540px] max-lg:mx-auto w-full' src="/assets/images/webp/attivita-image.webp" alt="attivita" width={800.6 } height={534} />

                  <div className='xl:pt-[92px] pt-10'>
                      <h3 className='lg:max-w-[384px] max-w-none text-[32px] text-white font-black xl:pb-10 pb-6 max-sm:text-center'>
                          Più tempo per gestire, meno tempo perso
                      </h3>
                      <div>
                          <div className='flex gap-2 pb-4'>
                              <Image className='size-5' src="/assets/images/png/yellow-tick.png" alt='yellow-tick' width={20} height={19} />
                              <p className='font-medium text-base text-white '>Gestione centralizzata e aggiornata in tempo reale</p>
                          </div>
                          <div className='flex gap-2 pb-4'>
                              <Image className='size-5' src="/assets/images/png/yellow-tick.png" alt='yellow-tick' width={20} height={19} />
                              <p className='font-medium text-base text-white'>Niente più errori nelle ordinazioni o incomprensioni</p>
                          </div>
                          <div className='flex gap-2 pb-4'>
                              <Image className='size-5' src="/assets/images/png/yellow-tick.png" alt='yellow-tick' width={20} height={19} />
                              <p className='font-medium text-base text-white'>Nessuna app da installare, né per te né per i clienti</p>
                          </div>
                          <div className='flex gap-2 pb-4'>
                              <Image className='size-5' src="/assets/images/png/yellow-tick.png" alt='yellow-tick' width={20} height={19} />
                              <p className='font-medium text-base text-white'>Maggiore autonomia per il cliente, meno stress per il personale</p>
                          </div>
                          <div className='flex gap-2 pb-4'>
                              <Image className='size-5' src="/assets/images/png/yellow-tick.png" alt='yellow-tick' width={20} height={19} />
                              <p className='font-medium max-w-[438px] text-base text-white'>Adatto a ogni tipo di attività: bar, lidi, hotel, saloni, officine e molto altro</p>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default VantaggiAttività