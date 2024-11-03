import React from 'react';
import PreviewComponent from '../Preview';
import LinuxIcon from '@/assets/Linux';

const MainComponent = () => {
  return (
    <main id="home" className="container mx-auto text-left px-10 flex h-full flex-col py-4 space-y-4 sm:py-36">
      <h1 className="text-4xl font-bold text-gray-800">Linux</h1>
      <p className="text-gray-600 mt-4 max-w-xl">
        Descubre el universo de Linux, desde sus humildes inicios hasta convertirse en el motor que impulsa la innovación en tecnologías de la información. Acompáñanos en un viaje a través de su rica historia, comprende cómo funciona su robusto sistema y explora cómo Linux está modelando el futuro de la inteligencia artificial, Kubernetes y Docker.
      </p>
      <PreviewComponent>
        <LinuxIcon />
      </PreviewComponent>
    </main>
  );
}

export default MainComponent;
