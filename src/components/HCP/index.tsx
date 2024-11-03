import Image from 'next/image';
import React from 'react';

interface Advantage {
    title: string;
    description: string;
}

const advantagesHPC: Advantage[] = [
    {
        title: 'Eficiencia en el Uso de Recursos',
        description: 'A diferencia de otros sistemas operativos, Linux permite un control exhaustivo sobre los procesos y servicios que están en ejecución, lo que reduce la sobrecarga en la CPU y memoria, maximizando la disponibilidad de recursos para tareas críticas. Este control es esencial para tareas intensivas en recursos, como simulaciones científicas o cálculos complejos en física y bioinformática.'
    },
    {
        title: 'Escalabilidad y Flexibilidad',
        description: 'Linux se adapta fácilmente a configuraciones desde pequeños clústeres hasta supercomputadoras de exaescala, como Fugaku y Frontier. La naturaleza modular y abierta de Linux permite a los administradores y desarrolladores ajustar el sistema operativo para optimizar la escalabilidad sin perder rendimiento, lo que es crucial para las aplicaciones HPC que requieren agregar nodos adicionales de manera sencilla.'
    },
    {
        title: 'Compatibilidad con Computación Paralela',
        description: 'Linux está optimizado para operaciones en paralelo, una capacidad esencial en el HPC. Las aplicaciones de alto rendimiento se benefician de la posibilidad de dividir cálculos complejos en múltiples núcleos y máquinas. Herramientas como MPI (Message Passing Interface) y OpenMP están ampliamente soportadas en Linux, facilitando la implementación de software que aprovecha la computación paralela.'
    },
    {
        title: 'Código Abierto y Personalización',
        description: 'El acceso al código fuente en Linux permite a los científicos y desarrolladores personalizar el sistema operativo según las necesidades específicas de sus proyectos de HPC, ajustando parámetros de rendimiento y aplicando mejoras de seguridad en tiempo real. Además, el software libre implica menores costos, lo que representa una ventaja económica significativa para proyectos que requieren una infraestructura computacional intensiva.'
    },
    {
        title: 'Amplio Ecosistema de Herramientas HPC',
        description: 'Linux ofrece soporte nativo para herramientas y bibliotecas de desarrollo científico, como TensorFlow, PyTorch, y compiladores optimizados para cálculos matemáticos intensivos. La compatibilidad con contenedores como Docker y Singularity también permite a los investigadores crear entornos aislados para experimentación sin afectar el sistema base.'
    }
];

const HPCComponent: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8 space-y-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Supercomputadoras</h1>
            <p className="text-gray-700 text-lg">
                Linux es el sistema operativo dominante en el mundo de las supercomputadoras, utilizado en el 100% de las 500 máquinas más potentes del mundo. La razón principal de esta elección radica en las ventajas que ofrece en el contexto de la informática de alto rendimiento (High Performance Computing o por sus siglas HPC) donde se requieren características avanzadas de escalabilidad, eficiencia en el uso de recursos, soporte para computación paralela y compatibilidad con herramientas especializadas.
            </p>

            <Image 
                src="/supercomputadoras.jpg" 
                alt="supercomputadora imagen"
                className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
                width={1000}
                height={1000}
            />

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">Ventajas de Linux en HPC</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {advantagesHPC.map((advantage, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">{advantage.title}</h3>
                        <p className="text-gray-600">{advantage.description}</p>
                    </div>
                ))}
            </div>

            <div className="text-gray-700 mt-8">
                <h2 className="text-2xl font-semibold text-gray-800">En resumen</h2>
                <p className="mt-4">
                    Linux es el estándar en supercomputación por su eficiencia, flexibilidad y capacidad para soportar operaciones a gran escala y en paralelo, además de su capacidad para ser personalizado según los requisitos específicos de cada proyecto. Estas características permiten a las supercomputadoras afrontar tareas complejas en áreas como modelado climático, genética, exploración espacial y física avanzada, posicionando a Linux como una herramienta clave en la investigación y desarrollo científico.
                </p>
            </div>

            <footer className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800">Fuentes:</h3>
                <ul className="list-disc list-inside text-blue-500">
                    <li><a href="https://www.networkworld.com/article/968995/linux-dominates-supercomputing.html" target="_blank" rel="noopener noreferrer">Network World</a></li>
                    <li><a href="https://www.stackscale.com/blog/most-powerful-supercomputers-linux/" target="_blank" rel="noopener noreferrer">Stackscale</a></li>
                    <li><a href="https://www.redhat.com/en/blog/red-hat-enterprise-linux-builds-foundation-worlds-fastest-supercomputers" target="_blank" rel="noopener noreferrer">Red Hat Enterprise Linux builds the foundation for the world’s fastest supercomputer(s)</a></li>
                </ul>
            </footer>
        </div>
    );
};

export default HPCComponent;