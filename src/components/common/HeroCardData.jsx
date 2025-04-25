"useClient";
import { usePathname } from "next/navigation";
import React from "react";
import {
    COME_FUNZIONA_DATA_LIST,
    COSA_POTRAI_DATA_LIST,
} from "src/utils/helper";
import HeroCard from "./HeroCard";
import Paragraph from "../custom-ui/Paragraph";
import Icons from "./icons";

const HeroCardData = () => {
    const path = usePathname();
    return (
        <div id="cosa-potrai" className={` !z-[2] overflow-hidden relative ${path === '/' ? 'pt-20 z-10 px-2.5 max-xl:pt-16 max-lg:pt-14 max-md:pt-12 pb-[94px] max-lg:pb-20 max-sm:pb-[106px] relative' : 'pb-[250px] max-sm:pb-[190px] px-4 pt-24 max-sm:pt-20'}`}>
            {path === "/" && <>
                <span className=" absolute top-[-7%] sm:hidden w-full left-0">
                    <Icons icon='comeSmVector' />
                </span>
            </>}
            <div className="container max-w-[1405px] justify-center flex flex-col items-center mx-auto">
                {path === '/' ? (<h3 className="text-40 common-text-shadow max-sm:min-w-[371px] leading-130 mx-auto max-lg:text-4xl max-sm:text-32  pb-6 font-black italic text-white text-center">
                    Cosa potrai fare con Tabli
                </h3>) : <>
                    <div className="w-full max-w-[700px] mx-auto mb-14">
                        <h3 className="text-40 max-sm:min-w-[371px] mx-auto leading-130 font-black italic text-dark-blue text-center">Come Funziona</h3>
                        <Paragraph className={'!text-dark-grey mt-2 max-[400px]:max-w-[345px] mx-auto text-center'} paragraphText={'Con Tabli puoi caricare in autonomia il tuo menù, listino o catalogo, aggiornare disponibilità e prezzi in tempo reale, e offrire un esperienza fluida ai tuoi clienti senza dover installare sistemi complessi'} />
                    </div>
                </>}
                <div
                    className={` grid  ${path === "/"
                        ? "grid-cols-3 max-md:grid-cols-2 gap-10 max-lg:px-1.5 max-xl:gap-8 max-lg:gap-7 max-md:gap-6 max-sm:gap-[13px] w-full max-w-[1070px]"
                        : "grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 justify-center gap-[15px] w-full"
                        }`}
                >
                    {path === "/" ? (
                        <>
                            {COSA_POTRAI_DATA_LIST.map((data, index) => (
                                <HeroCard
                                    key={index}
                                    icon={data.img}
                                    cardBg="bg-[#2B7D85]"
                                    title={data.title}
                                    titleColor="text-white"
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            {COME_FUNZIONA_DATA_LIST.map((data, index) => (
                                <HeroCard
                                    key={index}
                                    icon={data.img}
                                    cardBg="bg-white"
                                    title={data.title}
                                    titleColor="text-[#136F77]"
                                    description={data.description}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeroCardData;
