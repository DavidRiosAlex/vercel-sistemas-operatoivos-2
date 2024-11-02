'use client';

import BibliotecasYFrameworks from "@/components/BibliotecasYFrameworks";
import LayoutComponent from "@/components/commons/Layout";
import ExploringIA from "@/components/ExploringIA";
import HerramientasDeAprendizaje from "@/components/HerramientasDeAprendizajeEnIA";
import PorqueLinux from "@/components/PorqueLinuxParaIA";

const ArtificialIntelligence = () => {

    return (
        <LayoutComponent id="IA">
                <LayoutComponent>
                    <ExploringIA />
                </LayoutComponent>
                <LayoutComponent>
                    <PorqueLinux />
                </LayoutComponent>
                <LayoutComponent className='!h-[auto]'>
                    <BibliotecasYFrameworks />
                </LayoutComponent>
                <LayoutComponent className="!h-[auto]">
                    <HerramientasDeAprendizaje />
                </LayoutComponent>
        </LayoutComponent>
    )
}

export default ArtificialIntelligence;
