// src/pages/CaseDetails.jsx
import React, { useState } from 'react';
import './CaseDetails.css'; // Ensure this CSS file exists

const caseData = [
  { id: 1, title: 'Case Title 1', details: 'Details about Case Title 1...' },
  { id: 2, title: 'Case Title 2', details: 'Details about Case Title 2...' },
  { id: 3, title: 'Case Title 3', details: 'Details about Case Title 3...' },
  { id: 4, title: 'Case Title 4', details: 'Details about Case Title 4...' },
  { id: 5, title: 'Case Title 5', details: 'Details about Case Title 5...' },
  { id: 6, title: 'Case Title 6', details: 'Details about Case Title 6...' },
];

const CaseDetails = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  const handleTileClick = (caseItem) => {
    setSelectedCase(caseItem);
  };

  const handleCloseModal = () => {
    setSelectedCase(null);
  };

  return (
    <div className="case-details-container">
      {caseData.map((caseItem) => (
        <div
          key={caseItem.id}
          className="case-tile"
          onClick={() => handleTileClick(caseItem)}
        >
          {caseItem.title}
        </div>
      ))}

      {selectedCase && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedCase.title}</h2>
            <p>{selectedCase.details}</p>
            <button className="modal-close" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseDetails;
