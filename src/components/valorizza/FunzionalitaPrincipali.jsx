import React from 'react'
import Image from 'next/image'
const FunzionalitaPrincipali = () => {
  return (
    <div className='bg-[#FFDC64] py-[160px] relative'>
      <Image className='absolute top-[4%] h-[830px] w-full' src="/assets/images/png/Funzionalità-layer.png" alt='top-layer' width={1920} height={152} />

      <div className="max-w-[1408px] mx-auto pb-10">
        <h2 className='font-black text-[40px] text-center pb-4'>Funzionalità Principali</h2>
        <h5 className='font-black text-[32px] text-center'>Tutti gli strumenti di cui hai bisogno, in un’unica piattaforma.</h5>
        <div className="flex flex-wrap justify-center pt-20 gap-[27px]">
          <div className='rounded-[20px] bg-white p-6 relative'>
            <Image className='absolute -left-[8%] -top-[16%]' src="/assets/images/png/menu.png" alt='menu' width={160} height={160} />
            <h5 className='text-[#136F77] text-xl font-bold max-w-[212px] pt-[89px] pb-2'>
              Menù digitale personalizzabile
            </h5>
            <p className='font-medium text-base max-w-[212px] text[#363B3C]'>Crea e aggiorna in autonomia la tua offerta, sia essa di prodotti, servizi o esperienze.</p>
          </div>
          <div className='rounded-[20px] bg-white p-6 relative'>
            <Image className='absolute -left-[6%] -top-[19%]' src="/assets/images/png/Funzionalità-system.png" alt='menu' width={160} height={160} />
            <h5 className='text-[#136F77] text-xl font-bold max-w-[212px] pt-[89px] pb-2'>
              Sistema di ordinazione e gestione diretta
            </h5>
            <p className='font-medium text-base max-w-[212px] text[#363B3C]'>I clienti scelgono e ordinano dal proprio smartphone, senza attese o intermediari.</p>
          </div>
          <div className='rounded-[20px] bg-white p-6 relative'>
            <Image className='absolute -left-[8%] -top-[16%]' src="/assets/images/png/Funzionalità-data.png" alt='menu' width={160} height={160} />
            <h5 className='text-[#136F77] text-xl font-bold max-w-[212px] pt-[89px] pb-2'>
              Visualizzazione i dati in tempo reale
            </h5>
            <p className='font-medium text-base max-w-[212px] text[#363B3C]'>Ricevi, organizza e monitora tutte le richieste in modo semplice e centralizzato.</p>
          </div>
          <div className='rounded-[20px] bg-white p-6 relative'>
            <Image className='absolute -left-[8%] -top-[16%]' src="/assets/images/png/Funzionalità-scanner.png" alt='menu' width={160} height={160} />
            <h5 className='text-[#136F77] text-xl font-bold max-w-[212px] pt-[89px] pb-2'>
              Accesso all’offerta tramite QR Code
            </h5>
            <p className='font-medium text-base max-w-[212px] text[#363B3C]'>Ogni tavolo o punto vendita ha il proprio codice: facile da stampare, pronto all’uso.</p>
          </div>
          <div className='rounded-[20px] bg-white p-6 relative'>
            <Image className='absolute -left-[8%] -top-[18%]' src="/assets/images/png/Funzionalità-analize.png" alt='menu' width={160} height={160} />
            <h5 className='text-[#136F77] text-xl font-bold max-w-[212px] pt-[89px] pb-2'>
              Analisi, raccolta e visualizzazione dati
            </h5>
            <p className='font-medium text-base max-w-[212px] text[#363B3C]'>Tieni sotto controllo volumi, preferenze e andamento dell’attività, in modo chiaro.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FunzionalitaPrincipali