
import React, { useState } from 'react';
import PhaseMap from './components/PhaseMap';
import Phase from './components/Phase';
import './App.css';

const App = () => {
  const [selectedPhase, setSelectedPhase] = useState(null);

  const phases = [
    {
      title: 'Market Research',
      description:'This phase involves gathering data and insights about the market demand, consumer preferences, competition analysis, and regulatory requirements . Activities may include surveys, focus groups, interviews, data analysis, and trend forecasting. The goal is to identify opportunities, assess risks, and determine the target market for the new vehicle',
    },
    {
      title: 'Planning',
      description: 'In this phase, the project team develops a comprehensive plan outlining the project scope, objectives, timeline, budget, and resource allocation. Key considerations include technology selection, supply chain management, production capacity, and distribution strategy. Risk management and contingency planning are also essential components of the planning phase.',
    },
    {
      title: 'Design',
      description: 'During the design phase, engineers, designers, and other specialists collaborate to create the conceptual and detailed designs of the vehicle. This includes exterior and interior design, engineering specifications, prototyping, and testing. The goal is to ensure that the vehicle meets performance standards, safety regulations, and aesthetic requirements.',
    },
    {
      title: 'Manufacturing',
      description: 'Once the design is finalized, the manufacturing phase begins, where the vehicle components are produced and assembled.This involves setting up production facilities, sourcing materials, implementing quality control measures, and optimizing manufacturing processes. Continuous monitoring and optimization are necessary to meet production targets while maintaining quality standards and cost efficiency.',
    },
    {
      title: 'Sales',
      description: 'The final phase involves marketing, distribution, and sales of the vehicle to customers. Marketing strategies may include advertising campaigns, promotional events, and partnerships. Distribution channels, pricing strategies, and after-sales services are also crucial considerations. Feedback from customers and market performance data may inform future product iterations and improvements.',
    },
  ];

  const handlePhaseHover = (index) => {
    setSelectedPhase(phases[index]);
  };

  return (
    <div className="app">
      <div id='bg-image'><h1><b>Car Manufacturing Timeline</b></h1>
      <PhaseMap phases={phases} handlePhaseHover={handlePhaseHover} />
      {selectedPhase && <Phase {...selectedPhase} />}
      </div>
      
    </div>
  );
};

export default App;
