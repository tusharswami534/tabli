import React from 'react'
import SoluzioniMigliorare from '../../components/valorizza/SoluzioniMigliorare'
import VantaggiAttività from '../../components/valorizza/VantaggiAttività'
import FunzionalitaPrincipali from '../../components/valorizza/FunzionalitaPrincipali'

const page = () => {
    return (
        <div>
            <VantaggiAttività/>
            <FunzionalitaPrincipali/>
            <SoluzioniMigliorare />
        </div>
    )
}

export default page