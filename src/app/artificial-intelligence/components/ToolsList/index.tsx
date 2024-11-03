import React from "react";
import ImageDescriptionSection from "@/components/commons/ImageDescriptionSection";
import Image from "next/image";

// Definir el tipo de propiedad para cada herramienta
interface Tool {
    title: string;
    link: { label: string, link: string };
    img: string;
    description: string;
    functionalities: string[];
    applications: string[];
}

// Lista de herramientas de aprendizaje automático en Linux
const tools: Tool[] = [
    {
        title: "Jupyter Notebook",
        link: { label: "Jupyter", link: "https://docs.jupyter.org/en/latest/" },
        img: "/inteligencia-artificial/jupyter.png",
        description: "Jupyter Notebook es un entorno de desarrollo interactivo que permite crear y compartir documentos con código, texto, visualizaciones y ecuaciones. Es muy popular en ciencia de datos y aprendizaje automático, ya que permite la ejecución paso a paso de código y la visualización inmediata de los resultados.",
        functionalities: [
            "Interactividad: Permite ejecutar código en bloques (celdas), lo cual facilita el trabajo iterativo y la experimentación rápida.",
            "Visualización de datos: Compatible con bibliotecas de visualización como matplotlib, seaborn y plotly, lo cual permite mostrar gráficos y resultados en tiempo real.",
            "Soporte de múltiples lenguajes: Aunque Jupyter es popularmente utilizado con Python, también puede ejecutar otros lenguajes de programación como R, Julia y Scala.",
            "Integración de machine learning: Permite integrar fácilmente frameworks de ML y DL como TensorFlow, PyTorch, scikit-learn y Keras para construir y entrenar modelos."
        ],
        applications: [
            "Análisis exploratorio de datos (EDA): Jupyter facilita la limpieza, exploración y análisis de datos mediante gráficos interactivos.",
            "Desarrollo y prueba de modelos: Permite construir, ajustar y evaluar modelos de aprendizaje automático de manera interactiva.",
            "Documentación y presentación: Ideal para documentar experimentos y compartir resultados en formato HTML o PDF, lo cual es útil en entornos colaborativos de investigación y enseñanza."
        ]
    },
    {
        title: "Weka",
        link: { label: "Waikato", link: "https://www.waikato.ac.nz/int/research/institutes-centres-entities/institutes/artificial-intelligence-institute/research/software/" },
        img: "/inteligencia-artificial/weka.webp",
        description: "Weka (Waikato Environment for Knowledge Analysis) es un conjunto de herramientas de aprendizaje automático escrito en Java. Es particularmente popular en el ámbito académico y proporciona un entorno gráfico para ejecutar algoritmos de ML sin necesidad de programar.",
        functionalities: [
            "Interfaz gráfica: Weka permite realizar tareas de preprocesamiento, clasificación, regresión, clustering y visualización de datos a través de una interfaz gráfica intuitiva.",
            "Amplia gama de algoritmos: Weka incluye una biblioteca de algoritmos de ML populares como árboles de decisión, redes neuronales, regresión lineal, clustering (K-means), entre otros.",
            "Análisis y evaluación de modelos: Ofrece herramientas para evaluar y validar modelos, incluyendo el uso de técnicas de validación cruzada y selección de atributos.",
            "Extensibilidad: Permite agregar nuevos algoritmos y extensiones de terceros para aumentar sus capacidades."
        ],
        applications: [
            "Tareas educativas y de investigación: Weka es ideal para aprender sobre los algoritmos de ML sin necesidad de programación compleja, por lo que se utiliza mucho en enseñanza.",
            "Desarrollo rápido de prototipos: Los científicos de datos pueden probar y comparar rápidamente diferentes algoritmos en una interfaz gráfica antes de pasar a una implementación en producción.",
            "Análisis predictivo: Weka permite ejecutar modelos para predicción de datos históricos y análisis de patrones en datos."
        ]
    },
    {
        title: "Orange",
        link: { label: "Orange Data Mining", link: "https://orangedatamining.com/" },
        img: "/inteligencia-artificial/orange.webp",
        description: "Orange es una herramienta de ciencia de datos y aprendizaje automático de código abierto que proporciona una interfaz visual para crear y analizar flujos de trabajo de ML. Orange está basado en Python y es fácil de integrar con otras bibliotecas de Python.",
        functionalities: [
            "Interfaz de arrastrar y soltar: Orange permite construir flujos de trabajo de ML usando bloques visuales (widgets) que representan las diferentes tareas en el proceso de construcción de un modelo.",
            "Análisis de datos y visualización: Incluye widgets para preprocesar datos, explorar gráficos y realizar análisis estadísticos.",
            "Amplia gama de algoritmos: Orange soporta algoritmos de clasificación, regresión, clustering, reducción de dimensionalidad y visualización, como árboles de decisión, SVM, K-means y PCA.",
            "Extensiones y personalización: Es compatible con plugins que permiten expandir sus funcionalidades y personalizar el entorno según las necesidades del usuario."
        ],
        applications: [
            "Educación y exploración de datos: Orange es ampliamente utilizado en enseñanza debido a su enfoque visual e intuitivo, lo que facilita la comprensión de flujos de trabajo de ML y técnicas estadísticas.",
            "Construcción rápida de prototipos: Su interfaz visual permite a los usuarios crear prototipos y flujos de trabajo para experimentar con diferentes técnicas de ML sin necesidad de escribir código.",
            "Análisis de datos biológicos y médicos: Gracias a sus plugins especializados, Orange es popular en análisis de datos en bioinformática y medicina, donde se requiere una interacción visual y análisis rápido."
        ]
    }
];
const ToolsList: React.FC = () => {
    return (
        <div className="container mx-auto px-4 items-center  space-y-12">
            <h1 className="text-3xl font-bold text-gray-800 my-8">Herramientas de Machine Learning en Linux</h1>
            {tools.map((tool, index) => (
                <div key={tool.title}>
                    <div className="flex flex-col items-center justify-center space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            <a href={tool.link.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                {tool.link.label}
                            </a>
                        </h2>
                        <Image className="h-[400px] w-auto" src={tool.img} alt={tool.title} width={600} height={600} />
                    </div>
                    <p className="text-gray-700 mt-2">{tool.description}</p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-4">Funcionalidades</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        {tool.functionalities.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-4">Aplicaciones en ML</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        {tool.applications.map((application, i) => (
                            <li key={i}>{application}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ToolsList;
