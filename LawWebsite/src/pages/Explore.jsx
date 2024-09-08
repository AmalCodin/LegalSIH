// src/pages/Explore.jsx
import React, { useState } from 'react';
import './Explore.css'; // Ensure this CSS file exists

const caseData = [
  { id: 1, title: 'Brown v. Board of Education', details: 'Details about Brown v. Board of Education...' },
  { id: 2, title: 'Roe v. Wade', details: 'Details about Roe v. Wade...' },
  { id: 3, title: 'Marbury v. Madison', details: 'Details about Marbury v. Madison...' },
  { id: 4, title: 'Miranda v. Arizona', details: 'Details about Miranda v. Arizona...' },
  { id: 5, title: 'Plessy v. Ferguson', details: 'Details about Plessy v. Ferguson...' },
  { id: 6, title: 'Bush v. Gore', details: 'Details about Bush v. Gore...' },
  { id: 7, title: 'Gideon v. Wainwright', details: 'Details about Gideon v. Wainwright...' },
  { id: 8, title: 'Tinker v. Des Moines', details: 'Details about Tinker v. Des Moines...' },
  { id: 9, title: 'Obergefell v. Hodges', details: 'Details about Obergefell v. Hodges...' },
  { id: 10, title: 'Loving v. Virginia', details: 'Details about Loving v. Virginia...' },
  { id: 11, title: 'United States v. Nixon', details: 'Details about United States v. Nixon...' },
  { id: 12, title: 'Griswold v. Connecticut', details: 'Details about Griswold v. Connecticut...' },
  { id: 13, title: 'Korematsu v. United States', details: 'Details about Korematsu v. United States...' },
  { id: 14, title: 'Citizens United v. Federal Election Commission', details: 'Details about Citizens United v. Federal Election Commission...' },
  { id: 15, title: 'Mapp v. Ohio', details: 'Details about Mapp v. Ohio...' },
];

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCase, setSelectedCase] = useState(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleTileClick = (caseItem) => {
    setSelectedCase(caseItem);
  };

  const handleCloseModal = () => {
    setSelectedCase(null);
  };

  const filteredCases = caseData.filter((caseItem) =>
    caseItem.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="explore-container">
      <input
        type="text"
        placeholder="Search cases..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <div className="case-grid">
        {filteredCases.map((caseItem) => (
          <div
            key={caseItem.id}
            className="case-tile"
            onClick={() => handleTileClick(caseItem)}
          >
            {caseItem.title}
          </div>
        ))}
      </div>

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

export default Explore;
