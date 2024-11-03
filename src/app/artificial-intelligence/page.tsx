'use client';

import LayoutComponent from "@/components/commons/Layout";
import LinuxIA from "./components/Content";
import HeaderComponent from "@/components/HeaderNav";
import Head from "next/head";

const ArtificialIntelligence = () => {

    return (
        <LayoutComponent id="IA">
            <Head>
                <title>Inteligencia Artificial</title>
            </Head>
            <HeaderComponent actualTab="Inteligencia Artificial" />
            <LinuxIA />
        </LayoutComponent>
    )
}

export default ArtificialIntelligence;
