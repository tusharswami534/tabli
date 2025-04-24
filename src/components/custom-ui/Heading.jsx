import React from 'react'

const Heading = ({ headingText, className }) => {
  return (
    <h2 className={`md:text-dark-blue text-dark-grey font-black md:text-40 text-32 leading-100 italic ${className} `}>{headingText}</h2>
  )
}

export default Heading