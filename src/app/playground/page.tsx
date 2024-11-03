import LayoutComponent from "@/components/commons/Layout";
import HeaderComponent from "@/components/HeaderNav";
import Terminal from "@/components/Terminal";
import { NanoProvider } from "@/components/Terminal/Provider/NanoProvider";
import Head from "next/head";

const Playground = () => (
    <LayoutComponent>
        <Head>
            <title>Playground</title>
        </Head>
        <HeaderComponent actualTab={'Playground'} />
        <NanoProvider>
            <Terminal />
        </NanoProvider>
    </LayoutComponent>
)

export default Playground;