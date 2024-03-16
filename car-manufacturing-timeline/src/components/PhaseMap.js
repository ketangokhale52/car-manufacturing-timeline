import React from 'react';
import { FaCar } from 'react-icons/fa';

const PhaseMap = ({ phases, handlePhaseHover }) => {
  return (
    <div className="phase-map">
      {phases.map((phase, index) => (
        <div key={index} className="phase-segment" onMouseEnter={() => handlePhaseHover(index)}>
          <FaCar />
          <span className="phase-name">{phase.title}</span>
        </div>
      ))}
    </div>
  );
};

export default PhaseMap;
