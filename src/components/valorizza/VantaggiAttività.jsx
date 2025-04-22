import React from 'react'
import Image from 'next/image'
const VantaggiAttività = () => {
  return (
      <div className='bg-[#136F77] relative'>
          <Image className='absolute top-0' src="/assets/images/png/attivita-top-layer.png" alt='top-layer' width={1920} height={152} />
          <Image className='absolute -bottom-[21%]' src="/assets/images/png/attivita-bottom-layer.png" alt='bottom-layer' width={1920} height={152} />
          <div className="max-w-[1408px] mx-auto">
              <h2 className='text-[#FFDC64] text-center text-[40px] font-black'>
                  Vantggi per le tau Attivita
              </h2>
              <div className="flex justify-between pt-10 pb-[100px] max-w-[1408px] mx-auto">
                  <div>
                      <Image className='max-w-[750px]' src="/assets/images/png/attivita-image.png" alt="attivita" width={800.6 } height={534} />
                  </div>
                  <div className='pt-[92px]'>
                      <h3 className='max-w-[384px] text-[32px] text-white font-black pb-10'>
                          Più tempo per gestire, meno tempo perso
                      </h3>
                      <div>
                          <div className='flex gap-2 pb-4'>
                              <Image className='size-5' src="/assets/images/png/yellow-tick.png" alt='yellow-tick' width={20} height={19} />
                              <p className='font-medium text-base text-white'>Gestione centralizzata e aggiornata in tempo reale</p>
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