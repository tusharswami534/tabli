import React from 'react'
import Nav from './Nav'
import Paragraph from '../custom-ui/Paragraph'
import CustomButton from '../custom-ui/CustomButton'
import Image from 'next/image'
import Icons from './icons'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='bg-dark-blue pb-[72px] relative px-4'>
      <Link className='absolute bottom-4 left-1/2 -translate-x-1/2' href={'#come-funziona'}>
        <Icons icon='downArrow'/>
        </Link>
      <Nav />
      <div className='flex w-full py-[62px]'>
        <div className='container max-w-[1600px] mx-auto'>
          <div className='flex items-center gap-5 justify-between'>
            <div className='flex flex-col max-w-[726px]'>
              <h1 style={{textShadow: '0px 8px 16px 0px #00000029'}} className='text-80 max-xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-black italic text-white leading-131'>Tabli sta arrivando!</h1>
              <Paragraph paragraphText={'Stiamo per rivoluzionare il modo in cui acquisti prodotti e servizi nei tuoi luoghi preferiti.'} className={'mb-2'}/>
              <Paragraph paragraphText={'Con Tabli, potrai consultare l’offerta, ordinare e pagare direttamente dal tuo smartphone, in totale autonomia e senza attese.'}/>
              <div className='flex gap-4 mt-10'>
                    <CustomButton buttonName={'Come Funziona'} className={'max-w-[160px] w-full'}/>
                    <CustomButton buttonName={'Contatti'} className={'max-w-[160px] w-full !text-dark-blue !bg-white'}/>
              </div>
            </div>
            <div className='gap-2.5 flex items-center'>
                <Image height={365} width={197} className='max-w-[365px] max-2xl!:w-[75%] max-xl:!w-[50%] ' alt='mobile' src={'/assets/images/webp/first-mobile.webp'}/>
                <Image height={522} width={282} className='max-w-[522px] max-2xl!:w-[75%] max-xl:!w-[50%] ' alt='mobile' src={'/assets/images/webp/second-mobile.webp'}/>
                <Image height={365} width={197} className='max-w-[365px] max-2xl!:w-[75%] max-xl:!w-[50%] ' alt='mobile' src={'/assets/images/webp/third-mobile.webp'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

