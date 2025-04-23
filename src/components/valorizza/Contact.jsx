"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Heading from '../custom-ui/Heading';
import InputField from '../custom-ui/InputField';
import CustomButton from '../custom-ui/CustomButton';
import Swal from 'sweetalert2';

const Contact = () => {

  const [formData, setFormData] = useState({ nome: '', cognome: '', telefono: '', email: '', messaggio: '' });
  const [errors, setErrors] = useState({ nome: '', cognome: '', telefono: '', email: '', messaggio: '' });
  const phoneRegex = /^[0-9]{10,15}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value
    }));
    setErrors((prev) => ({
      ...prev, [name]: ''
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = { nome: '', cognome: '', telefono: '', email: '', messaggio: '' };
    let isValid = true;
    if (formData.nome.trim() === '') {
      formErrors.nome = 'Enter FirstName.';
      isValid = false;
    }
    if (formData.cognome.trim() === '') {
      formErrors.cognome = 'Enter LastName. ';
      isValid = false;
    }
    if (!phoneRegex.test(formData.telefono.trim())) {
      formErrors.telefono = 'Add a valid number of 10 letters.';
      isValid = false;
    }
    if (!emailRegex.test(formData.email.trim())) {
      formErrors.email = 'Add a valid email .';
      isValid = false;
    }
    if (formData.messaggio.trim() === '') {
      formErrors.messaggio = 'Add a fine description about concern.';
      isValid = false;
    }
    setErrors(formErrors);
    if (!isValid) return;
    Swal.fire({
      title: 'Success!',
      text: 'Message will submit successfuly!',
      icon: 'success',
      confirmButtonText: 'OK',
    });
    setFormData({ nome: '', cognome: '', telefono: '', email: '', messaggio: '' });
    console.log('Form submitted:', formData);
  };

  return (
    <div id='contatti' className='bg-yellow'>
      <div className=' md:pt-[200px] pt-[140px] lg:pb-[340px] pb-[200px] relative max-w-[1920px] mx-auto'>
        <Heading headingText="Contatti" className="!text-center !pb-[38px] !leading-normal !text-dark-blue" />
        <div className='absolute bottom-[5%] lg:block hidden '>
          <Image src="/assets/images/png/contact-outline.png" alt='contact-outline' width={1920} height={1080} className='lg:h-[870px]' />
        </div>
        <div className="container mx-auto px-4 max-w-[760px]">
          <form onSubmit={handleSubmit} className="rounded-lg w-full max-w-3xl relative z-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <InputField label="Nome" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
                {errors.nome && <p className="text-red-600 text-sm mt-2">{errors.nome}</p>}
              </div>
              <div>
                <InputField label="Cognome" name="cognome" placeholder="Cognome" value={formData.cognome} onChange={handleChange} />
                {errors.cognome && <p className="text-red-600 text-sm mt-2">{errors.cognome}</p>}
              </div>
              <div>
                <InputField label="Telefono" name="telefono" type="tel" placeholder="Telefono" value={formData.telefono}
                  onChange={handleChange} />
                {errors.telefono && <p className="text-red-600 text-sm mt-2">{errors.telefono}</p>}
              </div>
              <div>
                <InputField label="Email" name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                {errors.email && <p className="text-red-600 text-sm mt-2">{errors.email}</p>}
              </div>
            </div>
            <div className="mt-10">
              <label htmlFor="messaggio" className="block font-bold mb-2">  Messaggio </label>
              <textarea id="messaggio" name="messaggio" placeholder="Messaggio" className="w-full px-4 py-2 rounded-[8px] h-[240px] focus:outline-none shadow-common-button bg-white placeholder:text-black text-black" value={formData.messaggio} onChange={handleChange} />
              {errors.messaggio && <p className="text-red-600 text-sm mt-1">{errors.messaggio}</p>}
            </div>
            <div className="flex justify-center mt-10">
              <CustomButton type="submit" buttonName="INVIA MESSAGGIO" className="!text-white !bg-dark-blue !w-[169px] !h-[45px] cursor-pointer border-2 border-dark-blue hover:!bg-yellow !whitespace-nowrap flex justify-center items-center hover:!text-black transition-all duration-500 ease-linear" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;