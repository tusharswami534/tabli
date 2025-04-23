"useClient";
import { usePathname } from "next/navigation";
import React from "react";
import {
    COME_FUNZIONA_DATA_LIST,
    COSA_POTRAI_DATA_LIST,
} from "src/utils/helper";
import HeroCard from "./HeroCard";

const HeroCardData = () => {
    const path = usePathname();
    return (
        <div id="cosa-potrai" className={`px-2.5 ${path === '/' ? 'pt-20 z-10 max-xl:pt-16 max-lg:pt-14 max-md:pt-12 max-sm:pt-10 pb-[94px] max-lg:pb-20 max-sm:pb-[106px] relative' : ''}`}>
            <div className="container max-w-[1405px] justify-center flex flex-col items-center mx-auto">
                {path === '/' ? (<h3 className="text-40 common-text-shadow max-sm:min-w-[371px] mx-auto max-lg:text-4xl max-sm:text-32  pb-6 font-black italic text-white text-center">
                    Cosa potrai fare con Tabli
                </h3>) : <></>}
                <div
                    className={` grid px-1.5 ${path === "/"
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
                            {/* {COME_FUNZIONA_DATA_LIST.map((data, index) => (
                                <HeroCard
                                    key={index}
                                    icon={data.img}
                                    cardBg="bg-white"
                                    title={data.title}
                                    titleColor="text-[#136F77]"
                                    description={data.description}
                                />
                            ))} */}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeroCardData;
