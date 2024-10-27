import React from 'react';
import PreviewComponent from '../Preview';

const MainComponent = () => {
  return (
    <main id="home" className="container mx-auto text-center p-10">
      <h1 className="text-3xl font-bold text-gray-800">Simplify Conversations</h1>
      <p className="text-gray-600 mt-4">From Smart Home Innovation To Cutting-Edge Personal Gadgets</p>
      <div className="mt-8">
        <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-400 mr-4">Get 14 day free trial</button>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500">Get premium</button>
      </div>
      <PreviewComponent />
    </main>
  );
}

export default MainComponent;
