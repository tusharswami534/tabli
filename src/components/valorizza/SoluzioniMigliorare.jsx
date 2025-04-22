import React from 'react'
import Image from 'next/image'
const SoluzioniMigliorare = () => {
  return (
    <div>
      <div className='bg-[#136F77] relative -mt-1'>
        <div className="max-w-[1408px] mx-auto px-4">
          <div className="flex max-lg:flex-col gap-20 max-lg:justify-center pt-10 pb-[100px] max-w-[1408px] mx-auto">
           <Image src="/assets/images/png/soluzioni.png" alt='soluzioni-image' width={656} height={640}/>
            <div>
              <h3 className='lg:max-w-[465px] max-w-none text-[40px] text-[#FFDC64] font-black xl:pb-10 pb-6'>
                Soluzioni per migliorare
                il tuo lavoro
              </h3>
              <div>
                <div className='pb-8'>
                  <h4 className='text-[26px] font-bold text-white'>Assistenza Dedicata Sempre al Tuo Fianco</h4>
                  <p className='font-medium text-base text-white max-w-[520px]'>Con Tabli, non sarai mai solo. Offriamo un supporto completo e dedicato per aiutarti a sfruttare al meglio tutte le funzionalità della piattaforma. Che si tratti di configurare il tuo menù digitale, gestire gli ordini o risolvere qualsiasi dubbio tecnico, il nostro team è sempre pronto a fornirti assistenza in modo rapido e risolutivo</p>
                </div>
                <div className='pb-8'>
                  <h4 className='text-[26px] font-bold text-white'>Autonomia Completa con Guide e Risorse</h4>
                  <p className='font-medium text-base text-white max-w-[520px]'>Inoltre, oltre al supporto diretto, mettiamo a disposizione guide, FAQ e tutorial dettagliati. Potrai così imparare a gestire ogni aspetto della piattaforma in totale autonomia, senza perdere tempo.</p>
                </div>
                <div className='pb-8'>
                  <h4 className='text-[26px] font-bold text-white'>Ottimizza il Tuo Lavoro con Soluzioni Efficaci</h4>
                  <p className='font-medium text-base text-white max-w-[520px]'>Con Tabli, ogni parte del processo è pensata per facilitare il tuo lavoro, rendendolo più efficiente e produttivo. Il nostro obiettivo è che tu possa concentrarti su ciò che è più importante: gestire la tua attività al meglio, mentre noi ci occupiamo della parte tecnologica.</p>
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