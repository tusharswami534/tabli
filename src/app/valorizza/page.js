import React from "react";
import Contact from "src/components/valorizza/Contact";
import FunzionalitaPrincipali from "src/components/valorizza/FunzionalitaPrincipali";
import SoluzioniMigliorare from "src/components/valorizza/SoluzioniMigliorare";
import VantaggiAttività from "src/components/valorizza/VantaggiAttività";

const page = () => {
  return (
    <>
      <VantaggiAttività />
      <FunzionalitaPrincipali />
      <SoluzioniMigliorare />
      <Contact />
    </>
  );
};

export default page;
