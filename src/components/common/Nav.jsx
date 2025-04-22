'use client'
import React, { useEffect, useState } from 'react'
import Icons from './icons'
import Link from 'next/link'
import { NavList } from '../../utils/helper'

const Nav = () => {
  const [open , setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  return (
    <div className='w-full pt-10'>
        <div className='container max-w-[1600px] mx-auto'>
          <div className='w-full flex justify-between items-center'>
            <Link href="/">
              <Icons icon='logo'/>
            </Link>
            <div className={`flex items-center max-md:fixed max-md:w-full max-md:h-full max-md:justify-center max-md:top-0 max-md:bg-dark-blue max-md:flex-col max-md:z-10 max-md:transition-all max-md:duration-300 gap-6 ${open ? 'left-0' : 'left-full'}`}>
                {NavList.map((item, index) => (
                  <Link onClick={() => setOpen(false)} className='font-black italic hover:text-yellow transition-all duration-300 max-md:text-xl text-white leading-131' href={item.link} key={index}>
                    {item.title}
                  </Link>
                ))}
            </div>
           <button onClick={() => setOpen(!open)} className='w-[46px] relative z-20 hidden max-md:flex h-[45px] cursor-pointer overflow-hidden border-2 border-solid gap-1 items-center justify-center flex-col border-yellow rounded-lg'>
                <span className={`w-6 h-0.5 flex bg-yellow rounded-full transition-all duration-300 ${open  && 'translate-x-20'}`}></span>
                <span className={`w-[18px] h-0.5 flex bg-yellow transition-all duration-300 rounded-full relative after:absolute after:w-full after:h-full after:rounded-full after:bg-yellow after:top-0 after:left-0 after:transition-all after:duration-300 ${open  && 'rotate-45 !w-8 after:rotate-90'}`}></span>
                <span className={`w-3.5 h-0.5 flex bg-yellow transition-all duration-300 rounded-full ${open  && '-translate-x-20'}`}></span>
           </button>
          </div>
        </div>
    </div>
  )
}

export default Nav