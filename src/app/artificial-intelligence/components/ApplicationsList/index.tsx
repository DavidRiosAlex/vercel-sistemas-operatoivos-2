import Image from "next/image";

const applicationsInML = [
    {
        title: "Asistentes Virtuales",
        img: { src: "/inteligencia-artificial/asistente-virtual.webp", alt: "Asistentes Virtuales" },
        description: "Tecnologías como Siri, Alexa y Google Assistant utilizan procesamiento de lenguaje natural (NLP) y aprendizaje automático para interpretar comandos de voz, proporcionar respuestas y controlar dispositivos inteligentes en el hogar. Linux es frecuentemente el sistema operativo elegido para estos asistentes, ya que permite escalabilidad y personalización del entorno de desarrollo en servidores de alto rendimiento.",
        sources: [
            { label: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/10-examples-of-artificial-intelligence-in-real-life-2024/" },
            { label: "Coursera", link: "https://www.coursera.org/articles/machine-learning-examples" }
        ]
    },
    {
        title: "Sistemas de Recomendación",
        img: { src: "/inteligencia-artificial/sistemas-recomendacion.jpg", alt: "Sistemas de Recomendación" },
        description: "Empresas como Netflix, Amazon y Spotify usan sistemas de recomendación basados en IA para personalizar las sugerencias de contenido para los usuarios. Estos sistemas analizan patrones de comportamiento, historial de navegación y preferencias personales, aprovechando herramientas de aprendizaje profundo ejecutadas en Linux para manejar grandes volúmenes de datos y realizar predicciones precisas sobre los gustos de los usuarios.",
        sources: [
            { label: "BitGlint", link: "https://www.bitglint.com/examples-of-artificial-intelligence-applications/" },
            { label: "@upgrad", link: "https://www.upgrad.com/blog/artificial-intelligence-applications/" }
        ]
    },
    {
        title: "Análisis de Imágenes",
        img: { src: "/inteligencia-artificial/analisis-imagenes.png", alt: "Análisis de Imágenes" },
        description: "Aplicaciones en medicina y seguridad han incorporado IA para la interpretación de imágenes. En el sector médico, algoritmos de visión por computadora analizan radiografías, tomografías y resonancias para detectar enfermedades como el cáncer. En seguridad, empresas de vigilancia utilizan Linux para ejecutar algoritmos de detección y reconocimiento facial en tiempo real, mejorando la precisión en sistemas de identificación y monitoreo.",
        sources: [
            { label: "Examples.com", link: "https://www.examples.com/education/artificial-intelligence.html" }
        ]
    },
    {
        title: "Reconocimiento Facial",
        img: { src: "/inteligencia-artificial/reconocimiento-facial.webp", alt: "Reconocimiento Facial" },
        description: "Este es un campo ampliamente explotado en sistemas de seguridad y aplicaciones móviles. Empresas como Facebook y Google han implementado tecnologías de reconocimiento facial para organizar fotografías y mejorar la experiencia del usuario. Estas aplicaciones también se utilizan en aeropuertos y lugares públicos para identificar personas en listas de vigilancia, ofreciendo un control y seguridad sin precedentes.",
        sources: [
            { label: "BitGlint", link: "https://www.bitglint.com/examples-of-artificial-intelligence-applications/" },
            { label: "@upgrad", link: "https://www.upgrad.com/blog/artificial-intelligence-applications/" }
        ]
    },
    {
        title: "Detección de Fraudes",
        img: { src: "/inteligencia-artificial/deteccion-fraude.jpg", alt: "Detección de Fraudes" },
        description: "En el ámbito financiero, los sistemas de detección de fraude aprovechan el poder de la IA para analizar patrones de transacciones y detectar actividades sospechosas. Estos sistemas identifican anomalías en tiempo real para evitar fraudes con tarjetas de crédito y otros tipos de operaciones financieras. Gracias a Linux, se puede manejar un procesamiento continuo de datos en redes de servidores de alta eficiencia.",
        sources: [
            { label: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/10-examples-of-artificial-intelligence-in-real-life-2024/" },
            { label: "Coursera", link: "https://www.coursera.org/articles/machine-learning-examples" }
        ]
    }
];

const ApplicationsList: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Aplicaciones en Machine Learning sobre Linux</h1>
            
            {applicationsInML.map((app, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start bg-white rounded-lg shadow-md p-6 my-8">
                    <Image
                        src={app.img.src} 
                        alt={app.img.alt} 
                        className="w-full sm:w-1/3 rounded-lg"
                        width={300}
                        height={300}
                    />
                    <div className="sm:ml-6 mt-4 sm:mt-0 w-full">
                        {/* Título con enlace si está disponible */}
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            {app.title}
                        </h2>
                        
                        <p className="text-gray-700 mb-4">{app.description}</p>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Fuentes</h3>
                        <ul className="list-disc list-inside ml-4 space-y-1 text-blue-500">
                            {app.sources.map((source, i) => (
                                <li key={i}>
                                    <a href={source.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        {source.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ApplicationsList;