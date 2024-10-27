'use client';

import React from 'react';
// Importa los componentes que has creado
import HeaderComponent from '../components/HeaderNav';
import MainComponent from '../components/Main';
import LayoutComponent from '@/components/Layout';
import Terminal from '@/components/Terminal';
import { TimeLine } from '@/components/TimeLine';
import Conclusion from '@/components/Conclusion';

// Componente de página Home que ensambla todos los componentes
const Home = () => {
  return (
    <div className="relative h-screen">
      <HeaderComponent />
      <LayoutComponent>
        <MainComponent />
      </LayoutComponent>
      <LayoutComponent className="!h-[auto]">
        <TimeLine />
      </LayoutComponent>
      <LayoutComponent>
        <Terminal />
      </LayoutComponent>
      <LayoutComponent id="conclusion">
        <Conclusion />
      </LayoutComponent>
    </div>
  );
}

export default Home;