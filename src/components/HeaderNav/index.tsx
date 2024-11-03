import React from 'react';

const HeaderComponent = () => {
  return (
    <header className="w-full items-center pt-12 justify-center">
      <nav className="container mx-auto flex justify-center items-center w-1/4 bg-white p-2 rounded-full w-[auto]">
        <ul className="flex gap-10 justify-between">
          <li><a href="/" className="text-gray-800 hover:text-gray-600">Home</a></li>
          <li><a href="/artificial-intelligence" className="text-gray-800 hover:text-gray-600">Inteligencia Artificial</a></li>
          <li><a href="/conclusion" className="text-gray-800 hover:text-gray-600">Conclusion</a></li>
          <li><a href="/playground" className="text-gray-800 hover:text-gray-600">Playground</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;