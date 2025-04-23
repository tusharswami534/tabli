"useClient";
import { usePathname } from "next/navigation";
import React from "react";
import {
    COME_FUNZIONA_DATA_LIST,
    COSA_POTRAI_DATA_LIST,
} from "src/utils/helper";
import HeroCard from "./HeroCard";
import Image from "next/image";

const HeroCardData = () => {
    const path = usePathname();
    return (
        <div className={`px-4 ${path === '/' ? 'pt-20 max-xl:pt-16 max-lg:pt-14 max-md:pt-12 max-sm:pt-10 pb-[312px] max-sm:pb-[194px] relative' : ''}`}>
            {path === '/' && <>
                 <Image className='w-full max-w-[292px] sm:max-w-[400px] xl:max-w-[585px] absolute -translate-x-[50%] left-[50%] bottom-6 lg:bottom-[50px] z-10' height={158} width={585} src={'/assets/images/png/yellow-3-tabli.png'} alt='top layer' />
                      <Image className='w-full absolute z-20 bottom-0 left-0 max-sm:h-[71px]' height={217} width={1920} src={'/assets/images/png/benefits-top-layer.png'} alt='top layer' />
            </>}
            <div className="container max-w-[1405px] justify-center flex flex-col items-center mx-auto">
                {path === '/' ? (<h3 className="text-40 max-lg:text-4xl max-sm:text-32  pb-6 font-black italic text-white text-center">
                    Cosa potrai fare con Tabli
                </h3>) : <></>}
                <div
                    className={` grid ${path === "/"
                            ? "grid-cols-3 max-md:grid-cols-2 gap-10 max-xl:gap-8 max-lg:gap-7 max-md:gap-6 max-sm:gap-[13px] max-w-[1070px]"
                            : "grid-cols-4 gap-[15px]"
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
