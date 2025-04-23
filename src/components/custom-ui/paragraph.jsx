import React from 'react'

const Paragraph = ({ paragraphText, className }) => {
  return (
    <p className={`text-white ff-cooper-hewitt-medium font-medium text-base leading-131 ${className} `}>{paragraphText}</p>
  )
}

export default Paragraph