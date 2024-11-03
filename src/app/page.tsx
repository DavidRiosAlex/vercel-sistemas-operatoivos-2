'use client';

import React from 'react';
import HeaderComponent from '../components/HeaderNav';
import MainComponent from '../components/Main';
import LayoutComponent from '@/components/commons/Layout';
import { TimeLine } from '@/components/TimeLine';
import UseCase from '@/components/CasosDeUso';
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
      <LayoutComponent className="!h-[auto]">
        <TimeLine />
      </LayoutComponent>
      <LayoutComponent id="casos_de_uso" className='!h-[auto]'>
        <UseCase />
      </LayoutComponent>
    </div>
  );
}


export default Home;