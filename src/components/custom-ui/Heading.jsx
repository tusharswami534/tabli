import React from 'react'

const Heading = ({ headingText, className }) => {
  return (
    <h2 className={`text-dark-blue font-black text-40 leading-100 italic ${className} `}>{headingText}</h2>
  )
}

export default Heading