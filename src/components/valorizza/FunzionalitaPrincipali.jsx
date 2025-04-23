import React from 'react'
import Image from 'next/image'

const features = [
  {
    icon: '/assets/images/png/menu.png',
    title: 'Menù digitale personalizzabile',
    description: 'Crea e aggiorna in autonomia la tua offerta, sia essa di prodotti, servizi o esperienze.',
    imgStyle: 'absolute -left-[8%] -top-[16%]'
  },
  {
    icon: '/assets/images/png/Funzionalità-system.png',
    title: 'Sistema di ordinazione e gestione diretta',
    description: 'I clienti scelgono e ordinano dal proprio smartphone, senza attese o intermediari.',
    imgStyle: 'absolute -left-[6%] -top-[19%]'
  },
  {
    icon: '/assets/images/png/Funzionalità-data.png',
    title: 'Visualizzazione i dati in tempo reale',
    description: 'Ricevi, organizza e monitora tutte le richieste in modo semplice e centralizzato.',
    imgStyle: 'absolute -left-[8%] -top-[16%]'
  },
  {
    icon: '/assets/images/png/Funzionalità-scanner.png',
    title: 'Accesso all’offerta tramite QR Code',
    description: 'Ogni tavolo o punto vendita ha il proprio codice: facile da stampare, pronto all’uso.',
    imgStyle: 'absolute -left-[8%] -top-[16%]'
  },
  {
    icon: '/assets/images/png/Funzionalità-analize.png',
    title: 'Analisi, raccolta e visualizzazione dati',
    description: 'Tieni sotto controllo volumi, preferenze e andamento dell’attività, in modo chiaro.',
    imgStyle: 'absolute -left-[8%] -top-[18%]'
  }
]

const FunzionalitaPrincipali = () => {
  return (
    <div className='bg-yellow xl:pb-[300px] pb-[150px] 2xl:pt-[200px] pt-[130px] relative'>
      <Image className='absolute 2xl:top-[16%] min-[1200px]:top-[24%] min-[1200px]:h-[830px] h-auto w-full xl:block hidden' src="/assets/images/png/Funzionalità-layer.png" alt='top-layer' width={1920} height={152} />
      <div className="max-w-[1560px] mx-auto pb-10 px-4">
        <h2 className='font-black text-40 text-center pb-4 italic leading-130'>Funzionalità Principali</h2>
        <h5 className='font-black md:text-32 text-26 text-center italic leading-130'>Tutti gli strumenti di cui hai bisogno, in un’unica piattaforma.</h5>
        <div className="flex max-xl:flex-wrap justify-center pt-20 2xl:gap-[27px] min-[1300px]:gap-[30px] gap-[50px]">
          {features.map((feature, index) => (
            <div key={index} className='rounded-[20px] bg-white p-6 relative'>
              <Image className={feature.imgStyle} src={feature.icon} alt='feature-icon' width={160} height={160} />
              <h5 className='text-[#136F77] text-xl font-bold max-w-[212px] pt-[89px] pb-2'>
                {feature.title}
              </h5>
              <p className='font-medium text-base max-w-[212px] text-[#363B3C]'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FunzionalitaPrincipali
