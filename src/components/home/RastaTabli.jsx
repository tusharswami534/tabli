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
        <div className='bg-dark-blue relative min-h-screen items-center justify-center flex -mt-24 overflow-x-clip lg:pt-20'>
            <div className='absolute z-10 2xl:bottom-[-8%] xl:bottom-[-8%] lg:bottom-[-17%] md:bottom-[-9%] bottom-[-7%] sm:left-[9%] left-[14%] '>
                <Image src="/assets/images/webp/menu.webp" alt='menu' width={729} height={517} className='2xl:w-[729px] xl:w-[600px] lg:w-[300px] md:w-[250px] w-[236px]' />
            </div>
            <div className='absolute 2xl:left-0 -left-[3%] top-[33%] xl:block hidden'>
                <Image src="/assets/images/webp/timmer-outline.webp" alt='side outline' width={700} height={900} />
            </div>
            <div className='absolute left-[-2%] -top-[14%] z-20'>
                <Image src="/assets/images/png/phone-handing.png" alt='phone-handing' width={678} height={600} className='2xl:w-[678px] max-w-[678px] w-full max-lg:w-[220px]' />
            </div>
            <div className='absolute 2xl:right-[-8%] right-0 -top-[15%] z-10'>
                <Image src="/assets/images/png/food-plate.png" alt='phone-handing' width={591} height={600} className='2xl:w-[591px] 2xl:h-[600px] max-w-[591px] w-full object-contain max-lg:w-[124px]' />
            </div>
            <div className="container mx-auto px-4">
                <div className="bg-dark-blue text-white text-center rounded-lg max-w-[670px] ml-auto max-xl:mx-auto space-y-6">
                    <Heading headingText="Resta aggiornato su Tabli, il lancio è dietro l’angolo!" className="!text-white !max-w-[622px]" />

                    <div className="flex justify-center gap-4 ">
                        {[
                            { label: 'Giorni', value: timeLeft.days },
                            { label: 'Ore', value: timeLeft.hours },
                            { label: 'Minuti', value: timeLeft.minutes },
                        ].map(({ label, value }) => (
                            <div
                                key={label}
                                className="bg-light-blue rounded-lg px-6 py-6 !w-[218px] md:h-[180px] h-[128px] justify-center shadow-md flex flex-col items-center"
                            >
                                <span className="text-yellow md:text-80 text-40 font-extrabold leading-normal">{value}</span>
                                <span className="text-xl mt-1">{label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-2 max-w-[345px] mx-auto">
                        <label htmlFor="email" className="block text-left text-xl shadow-2xl font-bold">Email</label>
                        <InputField placeholder="Inserisci la tua Email" type='email' myClass="!max-w-[345px] " />
                        <CustomButton buttonName="  ISCRIVITI ORA" className="!w-[344px] h-[45px] !mt-6" type="submit" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RastaTabli