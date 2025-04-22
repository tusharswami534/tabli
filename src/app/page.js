import React from 'react'
import VantaggiPerTe from '../components/home/VantaggiPerTe'
import VantaggiAttività from '../components/valorizza/VantaggiAttività'
import FunzionalitaPrincipali from '../components/valorizza/FunzionalitaPrincipali'
import SoluzioniMigliorare from '../components/valorizza/SoluzioniMigliorare'

const page = () => {
  return (
    <>
      <VantaggiPerTe />
      <VantaggiAttività />
      <FunzionalitaPrincipali />
      <SoluzioniMigliorare/>
    </>
  )
}

export default page