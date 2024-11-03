import LayoutComponent from "@/components/commons/Layout";
import HeaderComponent from "@/components/HeaderNav";
import Terminal from "@/components/Terminal";
import Head from "next/head";

const Playground = () => (
    <LayoutComponent>
        <Head>
            <title>Playground</title>
        </Head>
        <HeaderComponent actualTab={'Playground'} />
        <Terminal />
    </LayoutComponent>
)

export default Playground;