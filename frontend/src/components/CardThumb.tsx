import React from 'react';

const CardThumb: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  return (
    <div className="card-thumb" onMouseMove={handleMouseMove}>
      <div className="card-thumb__tags">
        <span>React</span>
        <span>Redux</span>
        <span>JS</span>
      </div>
      <div className="card-thumb__lvl">Middle</div>
      <div className="card-thumb__question">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quo Lorem ipsum dolor sit amet.?
      </div>
    </div>
  );
}

export default CardThumb;
