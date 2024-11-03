import React from "react";
import LayoutComponent from "../commons/Layout";
import Swipper from "../Swipper";
import Card from "../commons/Card";
import ImageDescriptionSection from "../commons/ImageDescriptionSection";
import DeveloperTools from '../DeveloperTools';
import HPCComponent from "../HCP";

const distros = [
    {
        title: "Ubuntu",
        content: "Ubuntu es una distribución de Linux fácil de usar, basada en Debian. Es ideal para principiantes y ofrece una experiencia de usuario amigable con actualizaciones frecuentes y una gran comunidad de soporte.",
        img: '/distros/ubuntu-background.png',
        tags: [{ link: "https://ubuntu.com", label: 'Ubuntu Pagina' }]
    },
    {
        title: "CentOS",
        content: "CentOS es una distribución de Linux enfocada en servidores y entornos corporativos. Basada en Red Hat Enterprise Linux (RHEL), ofrece estabilidad y seguridad para aplicaciones empresariales.",
        img: '/distros/centos-background.png',
        tags: [{ link: "https://www.centos.org", label: 'CentOS Pagina' }]
    },
    {
        title: "Kali Linux",
        content: "Kali Linux es una distribución especializada en seguridad informática y pruebas de penetración. Incluye una amplia gama de herramientas para auditoría de seguridad y análisis de vulnerabilidades.",
        img: '/distros/kali-background.png',
        tags: [{ link: "https://www.kali.org", label: 'Kali Pagina' }]
    },
    {
        title: "Debian",
        content: "Debian es una de las distribuciones de Linux más estables y confiables. Con un enfoque en la libertad de software, es la base de muchas otras distribuciones, incluida Ubuntu.",
        img: '/distros/debian-background.png',
        tags: [{ link: "https://www.debian.org", label: 'Debian Pagina' }]
    }
];

const caracteristicasUbuntu = [
    {
        img: '/nuestra-eleccion/configuracion-ubuntu.png',
        title: 'Facilidad de configuración',
        description: 'Ubuntu tiene un proceso de instalación muy sencillo y una interfaz intuitiva que permite a los desarrolladores comenzar rápidamente. A diferencia de distribuciones más minimalistas como Arch Linux o Fedora, Ubuntu incluye muchas aplicaciones y controladores preinstalados, por lo que la mayoría de los desarrolladores pueden empezar a trabajar de inmediato sin necesidad de configuraciones avanzadas.',
        link: {
            label: 'Configuraciones ubuntu',
            href: 'https://help.ubuntu.com/stable/ubuntu-help/prefs.html.es'
        }
    },
    {
        img: '/nuestra-eleccion/soporte-lts-comunidad.png',
        title: 'Soporte de la Comunidad y LTS',
        description: 'Ubuntu ofrece versiones LTS (Long-Term Support) con actualizaciones de seguridad durante cinco años, lo cual es ideal para desarrolladores que buscan estabilidad a largo plazo. Además, Ubuntu cuenta con una amplia comunidad de usuarios, lo que significa que es fácil encontrar soluciones y documentación en línea para resolver problemas específicos de desarrollo.',
        link: {
            label: 'Soporte',
            href: 'https://ubuntu.com/community/support'
        }
    },
    {
        img: '/nuestra-eleccion/compatibilidades-ubuntu.png',
        title: 'Compatibilidad con Herramientas de Desarrollo',
        description: 'Muchas herramientas y bibliotecas de desarrollo están optimizadas o fácilmente disponibles en Ubuntu. El sistema operativo cuenta con soporte nativo para administradores de paquetes como apt, que facilita la instalación y gestión de herramientas como Git, Docker, Node.js, y Python, entre otras.',
        link: {
            label: 'Store de aplicaciones para desarrollo',
            href: 'https://snapcraft.io/store?categories=development'
        }
    },
    {
        img: '/nuestra-eleccion/entorno-productivo.jpeg',
        title: 'Entorno de Trabajo Productivo',
        description: 'Ubuntu ofrece una excelente integración con servicios en la nube, Docker, y entornos de contenedores, lo que facilita el trabajo en aplicaciones de desarrollo modernas, desde desarrollo local hasta implementación en producción.',
        link: {
            label: 'Configuraciones ubuntu',
            href: 'https://help.ubuntu.com/stable/ubuntu-help/prefs.html.es'
        }
    }
];

const ventajasUbuntu = [
    {
        title: 'Administrador de Paquetes APT',
        img: {
            src: '/ventajas/paquetes.webp',
            alt: ''
        },
        description: 'El sistema APT permite una fácil instalación de paquetes y actualizaciones de software, ideal para mantener el entorno de desarrollo actualizado.'
    },
    {
        title: 'Compatibilidad con Docker y Virtualización',
        img: {
            src: '/ventajas/compatibilidad.png',
            alt: 'docker logo'
        },
        description: 'Ubuntu es ampliamente compatible con Docker y tecnologías de virtualización, lo cual permite probar aplicaciones en entornos aislados o simular configuraciones de producción de manera sencilla.'
    },
    {
        title: 'Amplio Soporte para SDKs y Librerías',
        img: {
            src: '/ventajas/soporte.svg',
            alt: 'imagen de soporte'
        },
        description: 'Desde herramientas de ciencia de datos como TensorFlow y PyTorch hasta frameworks web como Django y Node.js, Ubuntu proporciona soporte extenso y es el sistema operativo recomendado por muchas de estas herramientas.'
    }
];

const UseCase = () => {
    return (
        <div>
            <LayoutComponent className="container mx-auto text-center px-10 flex h-full flex-col py-2 !h-auto">
                <h1 className="text-4xl font-bold text-gray-800">Distribuciones linux</h1>
                <p className="text-gray-600 mt-8 mb-8">
                    Las distribuciones de Linux (o "distros") son versiones personalizadas del sistema
                    operativo Linux que incluyen el núcleo de Linux junto con una combinación de
                    software, herramientas y configuraciones específicas. Cada distribución está diseñada
                    con un propósito particular, ofreciendo diferentes entornos de usuario, niveles de
                    personalización y paquetes de software. Algunas distribuciones populares incluyen
                    Ubuntu, Debian, Fedora y Arch Linux.
                </p>
                <Swipper>
                    {distros.map((distro) => (
                        <div key={distro.title} className="h-full w-full flex justify-center align-center p-10">
                            <Card>
                                <Card.CardImg src={distro.img} alt={distro.title.toLowerCase() + ' background'} />
                                <div className="px-6 py-4">
                                    <Card.Title>{distro.title}</Card.Title>
                                    <Card.CardDescription>
                                        {distro.content}
                                    </Card.CardDescription>
                                </div>
                                <Card.CardFooter tags={distro.tags} />
                            </Card>
                        </div>
                    ))}
                </Swipper>
            </LayoutComponent>
            <LayoutComponent className="!h-auto bg-white shadow-lg py-12">
                <div className="w-full flex py-20 flex-col">
                    <h2 className="text-3xl text-center font-semibold mb-12">Nuestra Eleccion</h2>
                    <p className="text-center mb-12">
                        Ambos integrantes del grupo usamos ubuntu como sistema operativo para
                        desempeñar nuestro trabajo. Ubuntu es una de las distribuciones de Linux más
                        populares y es ampliamente preferida por desarrolladores de software debido a su
                        facilidad de uso, estabilidad, y robusto soporte para herramientas de desarrollo. Hay
                        varias razones por las cuales se preferimos trabajar con Ubuntu en lugar de otras
                        distribuciones, y cada una representa una ventaja significativa en el entorno de
                        desarrollo de software.
                    </p>
                </div>
                {caracteristicasUbuntu.map((feature, index) => (
                        <ImageDescriptionSection 
                            key={index}
                            src={feature.img}
                            alt={feature.title}
                            className={index % 2 ? 'sm:flex-row' : 'sm:flex-row-reverse'}
                        >
                            <h3 className="text-xl font-bold" key="title">{feature.title}</h3>
                            <p key="description">{feature.description}</p>
                            <a href={feature.link.href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline" key="link">
                                {feature.link.label}
                            </a>
                        </ImageDescriptionSection>
                    )
                )}
            </LayoutComponent>
            <LayoutComponent className="bg-slate-200 p-4 sm:p-8">
                <div className="flex flex-col w-full h-full text-center items-center justify-evenly space-y-8">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    Ventajas de Ubuntu para el desarrollo de software
                    </h2>
                    <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8">
                    {ventajasUbuntu.map((ventaja) => (
                        <Card key={ventaja.title} className="flex flex-col p-4 sm:p-6 lg:p-8 bg-white shadow-lg rounded-lg w-full sm:w-1/2 lg:w-1/3 max-w-sm">
                        <Card.Title className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">
                            {ventaja.title}
                        </Card.Title>
                        <Card.CardImg className="w-full h-40 object-cover rounded-md mb-4" src={ventaja.img.src} alt={ventaja.img.alt} />
                        <Card.CardDescription className="text-sm sm:text-base lg:text-lg text-gray-700">
                            {ventaja.description}
                        </Card.CardDescription>
                        </Card>
                    ))}
                    </section>
                </div>
            </LayoutComponent>
            <LayoutComponent className="!h-auto">
                <DeveloperTools />
            </LayoutComponent>

            <LayoutComponent className="!h-auto">
                <HPCComponent />
            </LayoutComponent>
        </div>
    );
}

export default UseCase;