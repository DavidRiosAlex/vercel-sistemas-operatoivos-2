import React, { useState, useEffect } from "react";

export const Slider = () => {
  const blogPosts = [
    {
      date: '30 octubre 2024',
      title: 'Supercomputadoras',
      text: 'Porque se prefiere linux sobre otros sistemas operativos para su uso en supercomputadoras',
      imgSrc: 'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp',
    },
    {
      date: '30 octubre 2024',
      title: 'Bibliotecas y Frameworks ',
      text: 'Distintos tipos de biblioteca y frameworks para el uso en ML',
      imgSrc: 'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp',
    },
    {
      date: '30 octubre 2024',
      title: 'Casos de uso',
      text: 'Distintos casos de uso del sistema operativo tanto en familias como desarrolladores',
      imgSrc: 'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia de tarjeta automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
    }, 3000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [blogPosts.length]);

  return (
    <div
  className="relative mx-auto"
  style={{ width: 'auto', height: 'auto' }}
>

    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden h-full">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {blogPosts.map((post, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-[70%]">
                  <img src={post.imgSrc} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 h-[70%]">
                  <span className="block text-gray-500 text-sm">{post.date}</span>
                  <div className="font-bold text-xl my-2">{post.title}</div>
                  <div className="text-gray-700 text-base">{post.text}</div>
                  <a href="#" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">LEER MAS</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Puntos de navegación */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center space-x-2 py-2">
        {blogPosts.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Slider;
