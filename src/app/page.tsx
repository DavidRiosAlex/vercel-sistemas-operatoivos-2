'use client';

import React from 'react';
// Importa los componentes que has creado
import HeaderComponent from '../components/HeaderNav';
import MainComponent from '../components/Main';
import LayoutComponent from '@/components/commons/Layout';
import { TimeLine } from '@/components/TimeLine';
import Conclusion from '@/components/Conclusion';
import ExploringIa from '@/components/ExploringIA';
import PorqueLinux from '@/components/PorqueLinuxParaIA';
import BibliotecasYFrameworks from '@/components/BibliotecasYFrameworks';
import HerramientasDeAprendizaje from '@/components/HerramientasDeAprendizajeEnIA';
import CasosDeUso from '@/components/CasosDeUso';
import SuperComputadorasYLinux from '@/components/SuperComputadoras';
import Slider from '@/components/Swipper';

// Componente de página Home que ensambla todos los componentes
const Home = () => {
  return (
    <div className="relative h-screen">
      <HeaderComponent />
      <LayoutComponent>
        <MainComponent />
      </LayoutComponent>
      <LayoutComponent id="casos_de_uso" className='!h-[auto]'>
        <CasosDeUso />
      </LayoutComponent>
      <LayoutComponent id="supercomputadoras" className='!h-[auto]'>
        <SuperComputadorasYLinux />
      </LayoutComponent>
      <LayoutComponent className="!h-[auto]">
        <TimeLine />
      </LayoutComponent>
    </div>
  );
}


export default Home;