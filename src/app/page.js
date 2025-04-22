import React from 'react'
import VantaggiAttività from '../components/valorizza/VantaggiAttività'
import VantaggiPerTe from '../components/home/VantaggiPerTe'
import SoluzioniMigliorare from '../components/valorizza/SoluzioniMigliorare'

const page = () => {
  return (
    <div>
      <VantaggiAttività />
      <VantaggiPerTe />
      <SoluzioniMigliorare/>
    </div>
  )
}

export default page