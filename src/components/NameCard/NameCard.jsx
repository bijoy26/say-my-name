import React from 'react';
import './NameCard.css';

const NameCheapURL =
    'https://www.namecheap.com/domains/registration/results/?domain=';

const NameCard = ({ suggestedName }) => {
    return (
        <a
            className="card-link"
            href={`${NameCheapURL}${suggestedName}`}
            target="_blank"
            rel="noreferrer"
        >
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    );
};

export default NameCard;
