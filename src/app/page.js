import React from 'react'
import VantaggiPerTe from '../components/home/VantaggiPerTe'
import GestioneSemplice from '../components/home/GestioneSemplice'
import MaggioriInformazioni from '../components/home/MaggioriInformazioni'
import RastaTabli from 'src/components/home/RastaTabli'

const page = () => {
  return (
    <>
      <VantaggiPerTe />
      <GestioneSemplice />
      <MaggioriInformazioni />
      <RastaTabli/>
    </>
  )
}

export default page