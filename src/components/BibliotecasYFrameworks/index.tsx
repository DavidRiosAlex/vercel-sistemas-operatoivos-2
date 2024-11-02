import React from "react";

const BibliotecasYFrameworks = () => {
    return(
        <main className="container mx-auto text-left px-10 flex h-full flex-col py-36">
            <h1 className="text-4xl font-bold text-gray-800">Bibliotecas y Frameworks de IA en Linux </h1>
            <p className="text-gray-600 mt-4max-w-xl">
 <br />               
            <strong>• TensorFlow:</strong> Desarrollado por Google, TensorFlow es un framework que facilita la construcción y el entrenamiento de modelos de machine learning, adaptándose eficazmente tanto a la investigación como a la producción. Su capacidad para procesar grandes conjuntos de datos y su arquitectura escalable permiten su uso en una amplia gama de aplicaciones, desde sistemas de recomendación hasta avanzados sistemas de visión por computadora y procesamiento del lenguaje natural.<br />

            <strong>• PyTorch:</strong> Este framework destaca por su flexibilidad y dinamismo, favoreciendo un desarrollo iterativo y exploratorio dentro de la comunidad científica y de investigación. La integración profunda con Python y la capacidad para modificar gráficos computacionales en tiempo de ejecución hacen de PyTorch una herramienta preferida para proyectos de IA que requieren un alto grado de adaptabilidad y experimentación rápida.<br />

            <strong>• Scikit-learn:</strong> Especializado en machine learning tradicional, scikit-learn es ideal para quienes se inician en el aprendizaje automático, así como para desarrolladores que buscan implementar soluciones rápidas y eficaces. Proporciona herramientas potentes para la clasificación, la regresión y el clustering, siendo una piedra angular en la ciencia de datos para la predicción de tendencias y comportamientos.<br />

            Para documentación adicional sobre las ventajas y características de estos
            frameworks en Linux, puedes visitar las siguientes páginas:<br />
            <a href= "https://www.tensorflow.org/learn?hl=es-419" target= "_blank" rel="noopener noreferrer"><strong>TensorFlow</strong>, </a>
            <a href="https://pytorch.org/foundation" target="_blank" rel="noopener noreferrer"> <strong>PyTorch</strong>,  </a>
            <a href= "https://scikit-learn.org/stable/about.html" target="_blank" rel="noopener noreferrer"> <strong>ScikitLearn</strong></a>
            </p>
        </main>
    );
}

export default BibliotecasYFrameworks;