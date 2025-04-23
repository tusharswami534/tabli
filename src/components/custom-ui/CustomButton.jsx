import React from 'react'

const CustomButton = ({buttonName , myClass , className}) => {
  return (
    <button className={`px-4 pt-3.5 font-black uppercase italic shadow-common-button cursor-pointer transition-all duration-300 bg-yellow rounded-[40px] text-dark-grey pb-2.5 ${myClass , className}`}>
      {buttonName}
    </button>
  )
}

export default CustomButton

