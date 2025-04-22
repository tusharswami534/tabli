import React from 'react'
import Image from 'next/image'
const SoluzioniMigliorare = () => {
  return (
    <div>
      <div className='bg-dark-blue relative -mt-1 xl:pt-10'>
        <Image className='absolute lg:-top-[13%] md:-top-[8%] -top-[5%] md:h-[136px] h-[94px] w-full' src="/assets/images/png/Soluzioni-top-layer.png" alt='top-layer' width={1920} height={136} />
        <Image className='absolute 2xl:-bottom-[12%] lg:-bottom-[14%] md:-bottom-[10%] md:h-[136px] h-[94px] -bottom-[5%] w-full' src="/assets/images/png/Soluzioni-bottom-layer.png" alt='bottom-layer' width={1920} height={152} />
        <Image className='absolute h-auto left-0 w-[260px] xl:block hidden top-[5%]' src="/assets/images/png/soluzioni-left-layer.png" alt='top-layer' width={1920} height={136} />
        <Image className='absolute h-auto right-0 w-[379px] xl:block hidden ' src="/assets/images/png/soluzioni-right-layer.png" alt='bottom-layer' width={1920} height={152} />
        <div className="max-w-[1408px] mx-auto px-4">
          <div className="flex max-lg:flex-col gap-20 max-lg:justify-center pt-10 xl:pb-[100px] relative z-10 max-w-[1408px] mx-auto">
           <Image className=' xl:max-w-[656px] xl:h-[640px] md:max-w-[427px] w-full md:h-[500px]' src="/assets/images/webp/soluzioni.webp" alt='soluzioni-image' width={656} height={640}/>
            <div>
              <h3 className='lg:max-w-[465px] max-w-none italic text-40 text-[#FFDC64] font-black xl:pb-10 pb-6'>
                Soluzioni per migliorare
                il tuo lavoro
              </h3>
              <div>
                <div className='pb-8'>
                  <h4 className='text-26 font-bold text-white italic'>Assistenza Dedicata Sempre al Tuo Fianco</h4>
                  <p className='font-medium text-base text-white lg:max-w-[520px] max-w-none '>Con Tabli, non sarai mai solo. Offriamo un supporto completo e dedicato per aiutarti a sfruttare al meglio tutte le funzionalità della piattaforma. Che si tratti di configurare il tuo menù digitale, gestire gli ordini o risolvere qualsiasi dubbio tecnico, il nostro team è sempre pronto a fornirti assistenza in modo rapido e risolutivo</p>
                </div>
                <div className='pb-8'>
                  <h4 className='text-26 font-bold text-white italic'>Autonomia Completa con Guide e Risorse</h4>
                  <p className='font-medium text-base text-white lg:max-w-[520px] max-w-none'>Inoltre, oltre al supporto diretto, mettiamo a disposizione guide, FAQ e tutorial dettagliati. Potrai così imparare a gestire ogni aspetto della piattaforma in totale autonomia, senza perdere tempo.</p>
                </div>
                <div className='pb-8'>
                  <h4 className='text-26 font-bold text-white italic'>Ottimizza il Tuo Lavoro con Soluzioni Efficaci</h4>
                  <p className='font-medium text-base text-white lg:max-w-[520px] max-w-none'>Con Tabli, ogni parte del processo è pensata per facilitare il tuo lavoro, rendendolo più efficiente e produttivo. Il nostro obiettivo è che tu possa concentrarti su ciò che è più importante: gestire la tua attività al meglio, mentre noi ci occupiamo della parte tecnologica.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoluzioniMigliorare