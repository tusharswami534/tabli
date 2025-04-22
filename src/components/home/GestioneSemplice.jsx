import Image from 'next/image'
import React from 'react'
import Paragraph from '../custom-ui/paragraph'
import CustomButton from '../custom-ui/CustomButton'

const GestioneSemplice = () => {
  return (
    <div className="bg-dark-blue relative">
      <Image className='w-full object-cover -translate-y-0.5' height={217} width={1920} src={'/assets/images/png/gestione-top-layer.png'} alt='top layer' />
      <div className='flex max-md:flex-col-reverse max-lg:gap-4  max-2xl:px-5 max-w-[1440px] mx-auto items-center justify-between pt-[110px] pb-[97px] '>
        <div className="">
          <Image className='absolute left-[-40%] max-lg:hidden xl:left-[-20%] 2xl:left-0 top-[100px] xl:top-[280px] pointer-events-none' height={759} width={1006} src={'/assets/images/png/gestione-side-line.png'} alt='side line' />
          <div className="lg:max-w-[526px] max-w-[350px]">
            <p className='l:text-40 text-32 max-w-[500px] font-black text-white leading-100 pb-4 lg:pb-10'>Gestione Semplice, Servizio Efficiente</p>
            <p className='text-32 font-black leading-100 text-white max-lg:hidden'>Un Servizio Fluido e Intuitivo</p>
            <Paragraph className='pt-4' paragraphText={'Tabli è la piattaforma pensata per semplificare la gestione delle attività, indipendentemente dalla loro dimensione o settore.'} />
            <Paragraph className='pt-4' paragraphText={'Aiuta a organizzare ordini, migliorare l’esperienza dei clienti e ottimizzare i tempi, rendendo ogni fase del lavoro più fluida ed efficiente.'} />
            <Paragraph className='pt-4' paragraphText={'Versatile e personalizzabile, Tabli si adatta a bar, lidi, hotel, centri estetici e molto altro, accompagnandoti nel processo di digitalizzazione.'} />
            <CustomButton className='!text-dark-grey mt-10 max-sm:w-full' buttonName={'Maggiori Informazioni'} />
          </div>
        </div>
        <div className="">
          <Image className='max-2xl:w-[400px] max-sm:h-[390px] max-sm:translate-x-14 h-[400px]' height={586} width={619} src={'/assets/images/png/gestione-main.png'} alt='side img' />
        </div>
      </div>
    </div>
  )
}

export default GestioneSemplice