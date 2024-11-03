import LayoutComponent from "@/components/commons/Layout"
import Conclusion from "@/components/Conclusion";
import Head from "next/head";

const ConclusionPage = () => {
    return (
        <LayoutComponent id="conclusion" className="!h-[auto]" >
            <Head>
                <title>Conclusion</title>
            </Head>
            <Conclusion />
        </LayoutComponent>
    )
}

export default ConclusionPage;