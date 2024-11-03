import React from 'react';
import FrameworksAndToolsList from './FrameworksAndToolsList';
import Image from 'next/image';
import ToolsList from './ToolsList';
import ApplicationsList from './ApplicationsList';

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