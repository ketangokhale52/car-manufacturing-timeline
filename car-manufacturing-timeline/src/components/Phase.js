import React from 'react';

const Phase = ({ title, description }) => {
  return (
    <div className="phase">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Phase;
