import React from 'react'
import Image from 'next/image'
const VantaggiAttività = () => {
    return (
        <div className='bg-dark-blue relative pt-10'>

            <Image src="/assets/images/webp/outline.webp" alt='outline' width={1920} height={1080} className='w-full absolute 2xl:bottom-[-35%] min-[1200px]:-bottom-[21%] z-20  h-auto xl:block hidden' />
            <Image src="/assets/images/webp/tabli-name.webp" alt='tabli name' width={585} height={158} className=' absolute lg:top-[-23%] md:top-[-19%] top-[-10%] xl:left-[30%] lg:left-[18%] md:left-[10%] left-[9%] max-w-[585px] mx-auto w-full max-sm:w-[292px]' />
            <Image className='absolute lg:top-[-16%] sm:-top-[13%] -top-[7%] sm:h-[152px] h-[88px] w-full' src="/assets/images/png/attivita-top-layer.png" alt='top-layer' width={1920} height={152} />
            <Image className='absolute lg:-bottom-[15%] z-10 md:-bottom-[12%] -bottom-[8%] w-full md:h-[152px] h-[88px]' src="/assets/images/webp/attivita-bottom-layer.webp" alt='bottom-layer' width={1920} height={152} />
            <Image src="/assets/images/webp/tabli-yellow .webp" alt='tabli name' width={585} height={158} className=' absolute lg:bottom-[-8%] md:bottom-[-9%] bottom-[-5%] xl:left-[30%] lg:left-[18%] md:left-[10%] left-[9%] max-w-[585px] mx-auto w-full z-20 max-sm:w-[292px]' />

            <div className="max-w-[1408px] mx-auto px-4">
                <h2 className='text-yellow text-center text-[40px] font-black'>
                    Vantggi per le tau Attivita
                </h2>
                <div className="flex max-lg:flex-col lg:justify-between relative z-30 max-lg:justify-center pt-10 md:pb-[140px] pb-24 max-w-[1408px] mx-auto">
                    <Image className='xl:max-w-[750px] max-w-[540px] max-lg:mx-auto w-full' src="/assets/images/webp/attivita-image.webp" alt="attivita" width={800.6} height={534} />

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