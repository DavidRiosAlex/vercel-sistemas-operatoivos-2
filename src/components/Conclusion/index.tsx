import React from "react";
import LayoutComponent from "../commons/Layout";
import HeaderComponent from "../HeaderNav";

const Conclusion = () => {

    return (
        <LayoutComponent className="p-10 !h-auto">
            <HeaderComponent /> 
            <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold text-blue-600 mb-4">Conclusión: Linux en Desarrollo Web</h1>

                <div className="mb-6">
                <p className="text-lg">
                    Después de analizar Linux en profundidad, como grupo de estudiantes 
                    de la tecnicatura en software, creemos que es una opción ideal para el 
                    desarrollo web por varias razones que nos parecen muy relevantes.
                </p>
                </div>

                <div className="mb-6">
                <p className="text-lg">
                    Primero, nos dimos cuenta de que Linux se lleva muy bien con todas las 
                    herramientas clave en desarrollo web. Ya sea que estemos trabajando con 
                    servidores web, aplicaciones en general, o con herramientas de control de versiones 
                    como Git y plataformas de contenedores como Docker. Al desarrollar en Linux, estamos trabajando 
                    en un entorno que se parece mucho al que usan los servidores de producción. 
                    Esto significa que podemos detectar y resolver problemas de compatibilidad 
                    antes de desplegar, lo cual es una gran ventaja.
                </p>
                </div>

                <div className="mb-6">
                <p className="text-lg">
                    También notamos que Linux es un sistema muy seguro y estable, 
                    algo crucial cuando estamos manejando proyectos donde la protección 
                    de datos y la estabilidad son indispensables. La forma en que Linux 
                    gestiona los permisos y la seguridad nos da un control preciso sobre 
                    quién accede a qué, lo cual es ideal cuando trabajamos en equipo y 
                    necesitamos compartir recursos sin riesgos.
                </p>
                </div>

                <div className="mb-6">
                <p className="text-lg">
                    Además, no solo es gratuito (codigo abierto), sino que también nos permite personalizar 
                    y adaptar el sistema a nuestras necesidades, algo que no se puede hacer 
                    tan fácilmente en otros sistemas operativos.
                </p>
                </div>

                <div className="mb-6">
                <p className="text-lg font-semibold ">
                    En resumen, creemos que Linux nos ofrece todo lo que necesitamos para 
                    el desarrollo: compatibilidad, seguridad, estabilidad y libertad 
                    para personalizarlo.
                </p>
                </div>
            </div>
        </LayoutComponent>
    );
}

export default Conclusion;
