import React from 'react'

const Paragraph = ({ paragraphText, className }) => {
  return (
    <p className={`text-white font-medium text-base leading-131 ${className} `}>{paragraphText}</p>
  )
}

export default Paragraph