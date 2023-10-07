import React from 'react';
import Calender from "./Calender"

import './App.css';

function App() {
  const specificDate = new Date('2023-03-10');

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">My Calendar App</h1>
        <Calender date={specificDate} />
      </div>
    </div>
  );
}

export default App;
