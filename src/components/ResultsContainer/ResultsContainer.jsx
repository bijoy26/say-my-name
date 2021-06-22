import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNameJSX = suggestedNames.map((Name) => {
        return <NameCard key={Name} suggestedName={Name} />;
    });

    return <div className="results-container">{suggestedNameJSX}</div>;
};

export default ResultsContainer;
