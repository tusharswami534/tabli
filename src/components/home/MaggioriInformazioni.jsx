import React from 'react'
import Image from 'next/image'
import Paragraph from '../custom-ui/Paragraph'
import CustomButton from '../custom-ui/CustomButton'

const MaggioriInformazioni = () => {
  return (
    <>
      <div className="bg-yellow relative overflow-x-clip -mt-0.5 pb-4 md:pb-20 xl:pb-[120px]">
        <div className='flex gap-[160px] max-sm:translate-y-[-92px]  max-md:flex-col max-sm:pb-0 max-xl:pb-16 max-lg:gap-4  max-2xl:px-5 max-w-[1400px] mx-auto sm:items-center sm:justify-between lg:justify-end md:pt-[110px]'>
          <div>
            <Image className='2xl:h-[609px] pointer-events-none max-lg:w-[320px] max-md:max-w-[320px] max-md:mx-auto relative z-30' height={609} width={508} src={'/assets/images/png/more-info-img.png'} alt='side img' />
          </div>
          <div className="mb-[-52px]">
            <Image className='absolute pointer-events-none -right-20 2xl:h-[780px] max-xl:hidden z-20 top-[230px]' height={780} width={1152} src={'/assets/images/png/more-information-side-line.png'} alt='side line' />
            <div className="lg:max-w-[524px] md:max-w-[350px] max-sm:px-5">
              <div className=" max-[400px]:max-w-[293px]">
                <p className='lg:text-40 italic text-dark-grey text-32 max-w-[500px] font-black leading-119 pb-4 lg:pb-6'>Vuoi far crescere la tua attività?</p>
                <p className='lg:text-32 md:italic text-dark-grey text-xl font-bold md:font-black leading-119 '>Semplifica la gestione, migliora l’esperienza dei tuoi clienti</p>
                <Paragraph className='pt-4 !text-dark-grey' paragraphText={'Tabli è la soluzione pensata per supportare bar, hotel, lidi e tutte le attività locali che vogliono digitalizzare i propri servizi. Con un’interfaccia intuitiva e strumenti su misura, potrai gestire ordini, prenotazioni e richieste in modo efficiente, offrendo ai tuoi clienti un servizio moderno e senza attese.'} />
              </div>
              <div className='max-md:flex max-md:justify-center'>
              <CustomButton className='!text-white mt-10 max-md:max-w-[280px] max-md:mx-auto !py-[10.5px] !bg-dark-blue max-sm:w-full hover:!bg-white hover:!text-dark-blue' buttonName={'Maggiori Informazioni'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MaggioriInformazioni