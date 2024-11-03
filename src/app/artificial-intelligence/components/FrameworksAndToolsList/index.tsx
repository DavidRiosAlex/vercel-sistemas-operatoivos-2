import ImageDescriptionSection from "@/components/commons/ImageDescriptionSection";
import Image from "next/image";

const frameworksAndTools = [
    {
        title: 'TensorFlow',
        img: "/inteligencia-artificial/tensorflow.png",
        description: "TensorFlow es uno de los frameworks de aprendizaje automático (ML) y redes neuronales más populares. Desarrollado por Google, permite la construcción y el entrenamiento de modelos de redes neuronales en varias arquitecturas, incluidas CPU, GPU y TPU.",
        advantages: [
            "Compatible con CPU, GPU y TPU para optimizar el rendimiento.",
            "Amplio soporte de herramientas y documentación.",
            "Compatibilidad con una variedad de entornos, incluido Kubernetes para implementaciones en contenedores."
        ],
        useCases: [
            "Procesamiento de lenguaje natural.",
            "Visión por computadora.",
            "Modelos predictivos en general.",
            "Aplicaciones de recomendación.",
            "Procesamiento de imágenes.",
            "Sistemas de inteligencia artificial integrados en productos de consumo."
        ],
        sources: [
            { label: "Introducción a TensorFlow", link: "https://www.tensorflow.org/learn?hl=es-419" }
        ]
    },
    {
        title: 'PyTorch',
        img: "/inteligencia-artificial/pytorch.webp",
        description: "Desarrollado por Facebook (Meta), PyTorch es otra opción popular y es especialmente apreciado por su facilidad de uso y capacidad de ejecución dinámica (Dynamic Computation Graphs). Es ampliamente utilizado en investigación debido a su flexibilidad para experimentar con diferentes arquitecturas de modelos.",
        advantages: [
            "Flexible y fácil de depurar.",
            "Gran compatibilidad con Python, lo cual facilita la integración en pipelines de desarrollo de IA.",
            "Ampliamente adoptado en investigación y cuenta con una comunidad de desarrolladores muy activa."
        ],
        useCases: [
            "Tareas de investigación en IA.",
            "Desarrollo de prototipos.",
            "Procesamiento de imágenes.",
            "Modelos de redes generativas adversariales (GANs).",
            "Algoritmos de visión por computadora.",
            "Aplicaciones de IA en redes sociales.",
            "Procesamiento de secuencias."
        ],
        sources: [
            { label: "PyTorch Foundation | PyTorch", link: "https://pytorch.org/foundation" }
        ]
    },
    {
        title: 'Scikit-Learn',
        img: "/inteligencia-artificial/scikitlearn.png",
        description: "Scikit-learn es una biblioteca de Python para machine learning que ofrece una amplia gama de herramientas para la construcción de modelos de ML tradicionales (sin redes neuronales profundas). Es ideal para tareas de preprocesamiento de datos, clasificación, regresión, clustering y reducción de dimensionalidad.",
        advantages: [
            "Fácil de usar y de integrar en proyectos de análisis de datos.",
            "Ideal para tareas de machine learning tradicionales y algoritmos de aprendizaje automatizado (AutoML).",
            "Buena documentación y una gran comunidad activa."
        ],
        useCases: [
            "Clasificación de texto.",
            "Análisis de sentimientos.",
            "Clustering de datos.",
            "Análisis predictivos en empresas.",
            "Sistemas de recomendación.",
            "Procesos de análisis estadísticos."
        ],
        sources: [
            { label: "About us — scikit-learn", link: "https://scikit-learn.org/stable/about.html" }
        ]
    },
];

const FrameworksAndToolsList: React.FC = () => {
    return (
        <div className="container mx-auto px-4 w-full flex flex-col items-center">
            {frameworksAndTools.map((tool, index) => (
                <div className="flex flex-col w-full items-center" key={tool.title}>
                    <h2 className="text-2xl font-bold text-gray-800 items-center">{tool.title}</h2>
                    <Image src={tool.img} alt={'imagen de ' + tool.title} width={400} height={400} />
                    <div>
                        <p className="text-gray-700 mt-2">{tool.description}</p>
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">Ventajas</h3>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            {tool.advantages.map((advantage, i) => (
                                <li key={i}>{advantage}</li>
                            ))}
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-4">Casos de Uso</h3>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            {tool.useCases.map((useCase, i) => (
                                <li key={i}>{useCase}</li>
                            ))}
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-4">Fuentes</h3>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            {tool.sources.map((source, i) => (
                                <li key={i}>
                                    <a href={source.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                        {source.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FrameworksAndToolsList;