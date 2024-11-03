import React from 'react';
import FrameworksAndToolsList from './FrameworksAndToolsList';
import Image from 'next/image';
import ToolsList from './ToolsList';
import ApplicationsList from './ApplicationsList';

interface Framework {
    title: string;
    image: string;
    description: string;
    features: string[];
    advantages: string[];
    useCases: string[];
}

interface Tool {
    title: string;
    href: string;
    image: string;
    functionalities: string[];
    applications: string[];
}

interface Source {
    label: string;
    link: string;
}

interface Application {
    title: string;
    description: string;
    sources: Source[];
}

const frameworks: Framework[] = [
    {
        title: 'TensorFlow',
        image: '/path-to-your-image/Tensorflow-Funcionalidades.jpg',
        description: 'TensorFlow es uno de los frameworks de aprendizaje automático (ML) y redes neuronales más populares, desarrollado por Google.',
        features: [
            'Compatible con CPU, GPU y TPU para optimizar el rendimiento.',
            'Amplio soporte de herramientas y documentación.',
            'Compatibilidad con Kubernetes para implementaciones en contenedores.'
        ],
        advantages: [
            'Compatible con CPU, GPU y TPU para optimizar el rendimiento.',
            'Amplio soporte de herramientas y documentación.',
            'Compatibilidad con una variedad de entornos, incluido Kubernetes para implementaciones en contenedores.'
        ],
        useCases: [
            'Procesamiento de lenguaje natural.',
            'Visión por computadora.',
            'Modelos predictivos en general.'
        ]
    },
    {
        title: 'PyTorch',
        image: '/path-to-your-image/pytorch-flow.jpg',
        description: 'Desarrollado por Facebook, PyTorch es una opción popular y es especialmente apreciado por su facilidad de uso y capacidad de ejecución dinámica.',
        features: [
            'Flexible y fácil de depurar.',
            'Gran compatibilidad con Python, facilitando la integración en pipelines de desarrollo de IA.',
            'Ampliamente adoptado en investigación.'
        ],
        advantages: [
            'Flexible y fácil de depurar.',
            'Gran compatibilidad con Python.',
            'Comunidad activa de desarrolladores.'
        ],
        useCases: [
            'Investigación en IA.',
            'Desarrollo de prototipos.',
            'Modelos de redes generativas adversariales (GANs).'
        ]
    },
    {
        title: 'Scikit-learn',
        image: '/path-to-your-image/scikit-learn.jpg',
        description: 'Scikit-learn es una biblioteca de Python para machine learning, ideal para tareas tradicionales como clasificación, regresión y clustering.',
        features: [
            'Fácil de usar y de integrar en proyectos de análisis de datos.',
            'Ideal para tareas de machine learning tradicionales y algoritmos de aprendizaje automatizado (AutoML).',
            'Buena documentación y comunidad activa.'
        ],
        advantages: [
            'Fácil de usar y de integrar en proyectos de análisis de datos.',
            'Ideal para tareas de machine learning tradicionales.',
            'Buena documentación y una gran comunidad activa.'
        ],
        useCases: [
            'Clasificación y regresión en ciencia de datos.',
            'Análisis de sentimientos.',
            'Clustering de datos.'
        ]
    }
];

const tools: Tool[] = [
    {
        title: 'Jupyter Notebook',
        href: 'https://jupyter.org/about',
        image: '/path-to-your-image/jupyter-notebook.jpg',
        functionalities: [
            'Interactividad para ejecutar código en bloques.',
            'Visualización de datos con bibliotecas como matplotlib, seaborn y plotly.',
            'Soporte de múltiples lenguajes de programación.',
            'Integración de machine learning con TensorFlow, PyTorch, y scikit-learn.'
        ],
        applications: [
            'Análisis exploratorio de datos (EDA).',
            'Desarrollo y prueba de modelos.',
            'Documentación y presentación de resultados.'
        ]
    },
    {
        title: 'Weka',
        href: 'https://www.weka.io/',
        image: '/path-to-your-image/weka-ai.jpg',
        functionalities: [
            'Interfaz gráfica para preprocesamiento, clasificación, y visualización de datos.',
            'Amplia gama de algoritmos de ML.',
            'Análisis y evaluación de modelos.',
            'Extensibilidad para agregar algoritmos y extensiones de terceros.'
        ],
        applications: [
            'Tareas educativas y de investigación.',
            'Desarrollo rápido de prototipos.',
            'Análisis predictivo.'
        ]
    },
    {
        title: 'Orange',
        href: 'https://orangedatamining.com/',
        image: '/path-to-your-image/orange-data-mining.jpg',
        functionalities: [
            'Interfaz de arrastrar y soltar.',
            'Análisis de datos y visualización.',
            'Amplia gama de algoritmos de ML.',
            'Extensiones y personalización con plugins.'
        ],
        applications: [
            'Educación y exploración de datos.',
            'Construcción rápida de prototipos.',
            'Análisis de datos biológicos y médicos.'
        ]
    }
];

const applications: Application[] = [
    {
        title: 'Asistentes Virtuales',
        description: 'Tecnologías como Siri, Alexa y Google Assistant utilizan procesamiento de lenguaje natural y aprendizaje automático para interpretar comandos de voz y controlar dispositivos inteligentes.',
        sources: [
            { label: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/' },
            { label: 'Coursera', link: 'https://www.coursera.org/' }
        ]
    },
    {
        title: 'Sistemas de Recomendación',
        description: 'Empresas como Netflix, Amazon y Spotify usan IA para personalizar las sugerencias de contenido para los usuarios.',
        sources: [
            { label: 'BitGlint', link: 'https://bitglint.com/' },
            { label: '@upgrad', link: 'https://www.upgrad.com/' }
        ]
    },
    {
        title: 'Análisis de Imágenes',
        description: 'Aplicaciones en medicina y seguridad utilizan IA para la interpretación de imágenes en áreas como el diagnóstico médico y la vigilancia.',
        sources: [
            { label: 'Examples.com', link: 'https://www.examples.com/' }
        ]
    },
    {
        title: 'Reconocimiento Facial',
        description: 'Implementado en sistemas de seguridad y aplicaciones móviles, se utiliza para organizar fotografías y mejorar la experiencia del usuario.',
        sources: [
            { label: 'BitGlint', link: 'https://bitglint.com/' },
            { label: '@upgrad', link: 'https://www.upgrad.com/' }
        ]
    },
    {
        title: 'Detección de Fraudes',
        description: 'Los sistemas de detección de fraude analizan patrones de transacciones para identificar actividades sospechosas en tiempo real.',
        sources: [
            { label: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/' },
            { label: 'Coursera', link: 'https://www.coursera.org/' }
        ]
    }
];

const LinuxIA: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8 space-y-12">
            <h1 className="text-3xl font-bold text-gray-800 text-center">Linux y la IA</h1>
            <Image src="/inteligencia-artificial/ai.webp" width={1000} height={1000} alt="AI" className="w-full mx-auto rounded-lg shadow-lg" />
            <p className="text-gray-700 text-lg">
                Linux es una plataforma preferida para proyectos de IA debido a su compatibilidad con herramientas de desarrollo y su estabilidad en entornos de producción...
            </p>
            <FrameworksAndToolsList />
            <ToolsList />
            <ApplicationsList />
        </div>
    );
};

export default LinuxIA;