import React from 'react'

const CustomButton = ({buttonName , className}) => {
  return (
    <button className={`px-4 pt-3.5 font-black uppercase italic shadow-common-button transition-all cursor-pointer duration-300 bg-yellow rounded-[40px] text-dark-grey pb-2.5 ${className}`}>
      {buttonName}
    </button>
  )
}

export default CustomButton

