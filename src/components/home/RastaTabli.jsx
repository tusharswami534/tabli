'use client';

import { useEffect, useRef, useState } from 'react'; import Image from 'next/image'
import Heading from '../custom-ui/Heading';
import InputField from '../custom-ui/InputField';
import CustomButton from '../custom-ui/CustomButton';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const RastaTabli = () => {
    const targetDate = new Date();
    const form = useRef();
    const [emial, setEmail] = useState('');
    const [error, setError] = useState(false);
    const EmailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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

    const sendEmail = (e) => {
        e.preventDefault();

        if (!EmailRegex.test(emial)) {
            setError(true);
            return;
        }
        setError(false);
        emailjs.sendForm('service_225sbpv', 'template_mfgmjof', form.current, {
            publicKey: 'yMfLmnJOVdFosmZqu',
        }).then(
            () => {
                console.log('SUCCESS!');
                Swal.fire({
                    title: "Iscrizione completata!",
                    text: "La tua email è stata registrata correttamente.",
                    icon: "success"
                });
                form.current.reset();
                setEmail('');
            },
            (error) => {
                console.log('FAILED...', error.text);
                Swal.fire({
                    title: "Errore",
                    text: "C'è stato un errore durante l'invio. Riprova.",
                    icon: "error"
                });
            }
        );
    };

    return (
        <div className='bg-dark-blue relative max-md:overflow-hidden md:overflow-x-clip pt-[255px] md:pt-[455px] pb-[175px] lg:pb-[200px] 2xl:pb-[490px] mt-[-1px]'>
            <Image className='absolute top-[200px] md:hidden' height={1440} width={613} src={'/assets/images/png/sm-food-line.png'} alt='food cover line' />
            <Image className='absolute left-[0px] max-xl:hidden top-[600px] 2xl:top-[520px] h-[700px] 2xl:h-[1200px] z-0' height={1100} width={1000} src={'/assets/images/png/food-cover-line.png'} alt='line layer' />
            <Image className='w-full max-sm:h-[73px] absolute -top-1 -translate-y-0.5 z-10' height={136} width={1920} src={'/assets/images/png/more-info-bottom-layer.png'} alt='bottom layer' />
            <div className='absolute left-[-2%] top-10 md:-top-[50px] xl:-top-[100px] z-20'>
                <Image src="/assets/images/png/phone-handing.png" alt='phone-handing' width={678} height={600} className='2xl:w-[678px] lg:w-[500px] md:w-[400px] w-[220px] max-md:h-[230px] object-cover' />
            </div>
            <div className='absolute right-[-15%] top-20 md:top-[-150px] xl:-top-[50px] z-10'>
                <Image src="/assets/images/png/food-plate.png" alt='phone-handing' width={591} height={600} className='2xl:w-[591px] food-plate object-contain h-[600px] md:w-[400px] w-[180px] max-md:h-[167px] xl:w-[500px]' />
            </div>
            <div className="container max-w-[1200px] mx-auto md:px-4 relative z-30">
                <div className="text-white text-center p-6 rounded-lg max-w-[670px] max-xl:mx-auto ml-auto">
                    <Heading headingText="Resta aggiornato su Tabli, il lancio è dietro l’angolo!" className="!text-white !max-w-[622px] !leading-130" />
                    <div className="flex justify-center gap-2 pb-10 md:pt-8 pt-4">
                        {[{ label: 'Giorni', value: timeLeft.days },
                        { label: 'Ore', value: timeLeft.hours },
                        { label: 'Minuti', value: timeLeft.minutes },
                        ].map(({ label, value }) => (
                            <div key={label} className="bg-light-blue rounded-lg px-6 py-6 sm:!w-[218px] sm:h-[180px] w-[109px] h-[128px] justify-center shadow-md flex flex-col items-center">
                                <span className="text-yellow md:text-80 text-40 font-extrabold leading-normal relative"> <span className='relative z-10'>{value}</span><span className="absolute top-2 left-2 z-0 text-teal-900 font-extrabold opacity-30">
                                    {value}
                                </span></span>
                                <span className="text-xl mt-1">{label}</span>
                            </div>
                        ))}
                    </div>
                    <form noValidate ref={form} onSubmit={sendEmail} className="space-y-2 max-w-[345px] mx-auto">
                        <label htmlFor="email" className="block text-left text-xl shadow-2xl font-bold relative"><span className='relative z-10'>Email</span> <span className="absolute top-0.5 left-[1px] z-0 text-teal-900 font-extrabold opacity-30">
                            Email</span> </label>
                        <InputField placeholder="Inserisci la tua Email" onChange={(e) => {
                            const value = e.target.value;
                            setEmail(value);
                            if (EmailRegex.test(value)) { setError(false); }
                        }} type='email' myClass="!max-w-[345px] !mr-auto !flex !justify-start !text-dark-grey placeholder:!text-dark-grey" />
                        <p className='text-red-500 text-left'>{error && 'Inserisci un indirizzo email valido'}</p>
                        <CustomButton buttonName="  ISCRIVITI ORA" className="md:!w-[344px] w-full h-[45px] !flex !justify-center !items-center !mt-6" />
                    </form>
                </div>
            </div>
            <div className='absolute z-10 2xl:bottom-[-3%] xl:bottom-[-8%] md:bottom-[-6%] bottom-[-1%] sm:left-[7%] left-[14%] '>
                <Image src="/assets/images/webp/menu.webp" alt='menu' width={729} height={517} className='2xl:w-[825px] xl:w-[600px] lg:w-[300px] md:w-[250px] w-[236px]' />
            </div>
        </div>
    )
}
export default RastaTabli