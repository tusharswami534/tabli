'use client';

import { useEffect, useState } from 'react'; import Image from 'next/image'
import Heading from '../custom-ui/Heading';
import InputField from '../custom-ui/InputField';
import CustomButton from '../custom-ui/CustomButton';

const RastaTabli = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 48);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();

            if (diff <= 0) {
                clearInterval(interval);
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);

            setTimeLeft({ days, hours, minutes });
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='bg-dark-blue relative max-md:overflow-hidden md:overflow-x-clip pt-[255px] md:pt-[455px] pb-[175px] lg:pb-[200px] 2xl:pb-[490px] mt-[-1px]'>
            <Image className='absolute top-[200px] md:hidden' height={1440} width={613} src={'/assets/images/png/sm-food-line.png'} alt='food cover line' />
            <Image className='absolute left-[0px] max-xl:hidden top-[600px] 2xl:top-[520px] h-[988px] z-0' height={988} width={950} src={'/assets/images/png/food-cover-line.png'} alt='line layer' />
            <Image className='w-full max-sm:h-[73px] absolute -top-1 -translate-y-0.5 z-10' height={136} width={1920} src={'/assets/images/png/more-info-bottom-layer.png'} alt='bottom layer' />
            <div className='absolute left-[-2%] top-10 md:-top-[50px] xl:-top-[100px] z-20'>
                <Image src="/assets/images/png/phone-handing.png" alt='phone-handing' width={678} height={600} className='2xl:w-[678px] lg:w-[500px] md:w-[400px] w-[220px] max-md:h-[230px] object-cover' />
            </div>
            <div className='absolute right-[-15%] top-20 md:top-[-150px] xl:-top-[50px] z-10'>
                <Image src="/assets/images/png/food-plate.png" alt='phone-handing' width={591} height={600} className='2xl:w-[591px] food-plate object-contain h-[600px] md:w-[400px] w-[180px] max-md:h-[167px] xl:w-[500px]' />
            </div>
            <div className="container max-w-[1200px] ml-auto md:px-4 relative z-30">
                <div className="text-white text-center p-6 rounded-lg max-w-[670px] md:space-y-6">
                    <Heading headingText="Resta aggiornato su Tabli, il lancio è dietro l’angolo!" className="!text-white !max-w-[622px]" />
                    <div className="flex justify-center gap-2 md:gap-4 mb-10 mt-4">
                        {[{ label: 'Giorni', value: timeLeft.days },
                        { label: 'Ore', value: timeLeft.hours },
                        { label: 'Minuti', value: timeLeft.minutes },
                        ].map(({ label, value }) => (
                            <div key={label} className="bg-light-blue rounded-lg px-6 py-6 sm:!w-[218px] sm:h-[180px] w-[109px] h-[128px] justify-center shadow-md flex flex-col items-center">
                                <span className="text-yellow md:text-80 text-40 font-extrabold leading-normal">{value}</span>
                                <span className="text-xl mt-1">{label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-2 max-w-[345px] mx-auto">
                        <label htmlFor="email" className="block text-left text-xl shadow-2xl font-bold">Email</label>
                        <InputField placeholder="Inserisci la tua Email" type='email' myClass="!max-w-[345px] !mr-auto !flex !justify-start !text-dark-grey placeholder:!text-dark-grey" />
                        <CustomButton buttonName="  ISCRIVITI ORA" className="md:!w-[344px] w-full h-[45px] !flex !justify-center !items-center !mt-6" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RastaTabli