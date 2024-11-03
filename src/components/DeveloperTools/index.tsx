import React from 'react';

interface Tool {
    title: string;
    description: string;
}

const herramientasDesarrollo: Tool[] = [
    {
        title: 'Visual Studio Code o Sublime Text',
        description: 'Estos editores de código son ligeros y altamente configurables, y permiten un desarrollo ágil con extensiones útiles para múltiples lenguajes de programación.'
    },
    {
        title: 'Git',
        description: 'Para control de versiones, es fundamental instalar Git, que es la herramienta estándar para la gestión de versiones en la mayoría de los proyectos de desarrollo.'
    },
    {
        title: 'Docker y Docker Compose',
        description: 'Facilitan la creación de entornos de desarrollo consistentes mediante contenedores, útiles para desarrollar aplicaciones web y servicios.'
    },
    {
        title: 'Python y Node.js',
        description: 'Estos entornos de desarrollo son esenciales para muchos proyectos de desarrollo modernos y se pueden instalar fácilmente usando apt o gestores de versiones específicos como pyenv y nvm.'
    },
    {
        title: 'MySQL y PostgreSQL',
        description: 'Para bases de datos relacionales, ambas son herramientas fundamentales en el desarrollo de backend y pueden ser instaladas y configuradas fácilmente en Ubuntu.'
    },
    {
        title: 'Herramientas de Virtualización (VirtualBox o KVM)',
        description: 'Para pruebas de aplicaciones en diferentes sistemas, se pueden instalar VirtualBox o KVM (Kernel-based Virtual Machine), que permiten probar software en diferentes entornos sin cambiar el sistema principal.'
    }
];

const DevelopmentToolsView: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Herramientas de Desarrollo a Instalar en Ubuntu</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {herramientasDesarrollo.map((tool, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">{tool.title}</h2>
                        <p className="text-gray-600">{tool.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DevelopmentToolsView;