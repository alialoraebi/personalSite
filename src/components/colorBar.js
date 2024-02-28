import React, { useState } from 'react';

function ColorBar() {
  const [hoveredColor, setHoveredColor] = useState(null);

  return (
    <div className="flex h-2">
      <div
        className={`flex-grow transition-all duration-200 ease-in-out bg-custom-red ${hoveredColor === 'red' ? 'flex-grow-2' : ''}`}
        onMouseEnter={() => setHoveredColor('red')}
        onMouseLeave={() => setHoveredColor(null)}
      />
      <div
        className={`flex-grow transition-all duration-200 ease-in-out bg-custom-green ${hoveredColor === 'green' ? 'flex-grow-2' : ''}`}
        onMouseEnter={() => setHoveredColor('green')}
        onMouseLeave={() => setHoveredColor(null)}
      />
      <div
        className={`flex-grow transition-all duration-200 ease-in-out bg-custom-blue ${hoveredColor === 'blue' ? 'flex-grow-2' : ''}`}
        onMouseEnter={() => setHoveredColor('blue')}
        onMouseLeave={() => setHoveredColor(null)}
      />
    </div>
  );
}

export default ColorBar;