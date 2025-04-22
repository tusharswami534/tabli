import React from 'react'
import VantaggiAttività from '../components/valorizza/VantaggiAttività'
import VantaggiPerTe from '../components/home/VantaggiPerTe'
import SoluzioniMigliorare from '../components/valorizza/SoluzioniMigliorare'
import FunzionalitaPrincipali from '../components/valorizza/FunzionalitaPrincipali'

const page = () => {
  return (
    <div>
      <VantaggiAttività />
      <VantaggiPerTe />
      <FunzionalitaPrincipali/>
      <SoluzioniMigliorare />
    </div>
  )
}

export default page