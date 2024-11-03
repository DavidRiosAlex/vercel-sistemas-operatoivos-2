'use client';

import LayoutComponent from "@/components/commons/Layout";
import LinuxIA from "./components/Content";
import HeaderComponent from "@/components/HeaderNav";

const ArtificialIntelligence = () => {

    return (
        <LayoutComponent id="IA">
            <HeaderComponent />
            <LinuxIA />
        </LayoutComponent>
    )
}

export default ArtificialIntelligence;
