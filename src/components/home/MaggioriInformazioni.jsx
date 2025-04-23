import React from 'react'
import Image from 'next/image'
import Paragraph from '../custom-ui/Paragraph'
import CustomButton from '../custom-ui/CustomButton'

const MaggioriInformazioni = () => {
  return (
    <>
      <div className="bg-yellow relative overflow-x-clip -mt-0.5 pb-[200px]">
        <div className='flex gap-[160px] max-sm:translate-y-[-92px]  max-md:flex-col max-sm:pb-0 max-xl:pb-16 max-lg:gap-4  max-2xl:px-5 max-w-[1440px] mx-auto items-center justify-between lg:justify-end md:pt-[110px]'>
          <div>
            <Image className='2xl:h-[609px] max-lg:w-[320px] relative z-10' height={609} width={508} src={'/assets/images/png/more-info-img.png'} alt='side img' />
          </div>
          <div className="mb-[-52px]">
            <Image className='absolute pointer-events-none -right-20 2xl:h-[800px] max-xl:hidden z-20 top-[230px]' height={780} width={1152} src={'/assets/images/png/more-information-side-line.png'} alt='side line' />
            <div className="lg:max-w-[524px] max-w-[350px]">
              <p className='lg:text-40 italic text-dark-grey text-32 max-w-[500px] font-black leading-100 pb-4 lg:pb-6'>Vuoi far crescere la tua attività?</p>
              <p className='lg:text-32 md:italic text-dark-grey text-xl font-bold md:font-black leading-100 '>Semplifica la gestione, migliora l’esperienza dei tuoi clienti</p>
              <Paragraph className='pt-4 !text-dark-grey' paragraphText={'Tabli è la soluzione pensata per supportare bar, hotel, lidi e tutte le attività locali che vogliono digitalizzare i propri servizi. Con un’interfaccia intuitiva e strumenti su misura, potrai gestire ordini, prenotazioni e richieste in modo efficiente, offrendo ai tuoi clienti un servizio moderno e senza attese.'} />
              <CustomButton className='!text-white mt-10 !bg-dark-blue max-sm:w-full' buttonName={'Maggiori Informazioni'} />
            </div>
          </div>
        </div>
      </div>
      <Image className='w-full max-sm:h-[73px] -translate-y-0.5 relative z-10' height={136} width={1920} src={'/assets/images/png/more-info-bottom-layer.png'} alt='bottom layer' />
    </>
  )
}

export default MaggioriInformazioni