import Image from 'next/image'
import React from 'react'
import Paragraph from '../custom-ui/Paragraph'
import CustomButton from '../custom-ui/CustomButton'

const GestioneSemplice = () => {
  return (
    <div className="bg-dark-blue relative overflow-x-clip">
      <Image className='w-full max-w-[292px] sm:max-w-[400px]  xl:max-w-[585px] absolute -translate-x-[50%] left-[50%] -top-6 lg:-top-4 z-50' height={158} width={585} src={'/assets/images/png/blue-3-tabli.png'} alt='top layer' />
      <Image className='w-full object-cover -translate-y-1' height={217} width={1920} src={'/assets/images/png/gestione-top-layer.png'} alt='top layer' />
      <div className='flex max-md:flex-col-reverse max-sm:pb-[214px] max-xl:pb-16 max-lg:gap-4 max-sm:px-0 max-2xl:px-5 max-w-[1440px] mx-auto items-center justify-between pt-[110px]'>
        <div className="max-sm:px-5">
          <Image className='absolute left-[-35%] max-lg:hidden xl:left-[-20%] 2xl:left-0 top-[150px] xl:top-[200px] 2xl:top-[280px] pointer-events-none' height={759} width={1006} src={'/assets/images/png/gestione-side-line.png'} alt='side line' />
          <div className="lg:max-w-[526px] max-w-[350px]">
            <p className='lg:text-40 text-32 max-w-[500px] font-black text-white leading-100 pb-4 lg:pb-10'>Gestione Semplice, Servizio Efficiente</p>
            <p className='text-32 font-black leading-100 text-white max-lg:hidden'>Un Servizio Fluido e Intuitivo</p>
            <Paragraph className='pt-4' paragraphText={'Tabli è la piattaforma pensata per semplificare la gestione delle attività, indipendentemente dalla loro dimensione o settore.'} />
            <Paragraph className='pt-4' paragraphText={'Aiuta a organizzare ordini, migliorare l’esperienza dei clienti e ottimizzare i tempi, rendendo ogni fase del lavoro più fluida ed efficiente.'} />
            <Paragraph className='pt-4' paragraphText={'Versatile e personalizzabile, Tabli si adatta a bar, lidi, hotel, centri estetici e molto altro, accompagnandoti nel processo di digitalizzazione.'} />
            <CustomButton className='!text-dark-grey mt-10 max-sm:w-full' buttonName={'Maggiori Informazioni'} />
          </div>
        </div>
        <div>
          <Image className='max-xl:w-[400px] max-2xl:w-[500px] h-[380px] xl:h-[480px] max-sm:w-[414px] max-sm:h-[396px] max-sm:translate-x-14 2xl:h-[586px] ' height={620} width={619} src={'/assets/images/png/gestione-main.png'} alt='side img' />
        </div>
      </div>
      <Image className='absolute sm:hidden left-[50%] top-[-5%] translate-x-[-50%] pointer-events-none' height={1440} width={633} src={'/assets/images/png/sm-screen-lines.png'} alt='summer ticket' />
      <Image className='absolute -bottom-6 sm:hidden left-0' height={190} width={152} src={'/assets/images/png/summer-ticket-one.png'} alt='summer ticket' />
      <Image className='absolute bottom-8 sm:hidden -right-18' height={190} width={152} src={'/assets/images/png/summer-ticket-two.png'} alt='summer ticket' />
      <Image className='w-full  max-sm:h-[73px]' height={136} width={1920} src={'/assets/images/png/gestione-bottom-layer.png'} alt='bottom layer' />
    </div>
  )
}

export default GestioneSemplice