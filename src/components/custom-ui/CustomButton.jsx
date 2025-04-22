import React from 'react'

const CustomButton = ({buttonName}) => {
  return (
    <button className={`px-4 pt-3.5 font-black uppercase italic shadow-common-button transition-all duration-300 bg-yellow rounded-[40px] text-dark-blue pb-2.5`}>
      {buttonName}
    </button>
  )
}

export default CustomButton

