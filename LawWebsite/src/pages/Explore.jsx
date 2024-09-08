import React, { useState } from 'react';
import './Explore.css'; // Ensure this CSS file exists

const caseData = [
  {
    id: 1,
    title: 'Civil Cases',
    details: 'Civil cases involve conflicts between people or institutions such as businesses. A civil case usually begins when one person or business (called the plaintiff) claims to have been harmed by the actions of another person or business (called the defendant).',
    image: 'https://bizimages.withfloats.com/actual/65f5df7be12940c9f42a9085.jpg' // Sample image URL
  },
  {
    id: 2,
    title: 'Criminal Cases',
    details: 'Criminal cases involve enforcing public codes of behavior as embodied in the laws, with the government prosecuting individuals or institutions. In a criminal case, the government brings charges against the person alleged to have committed the crime.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwC8j6E8JGMETNGqp89YkRYPLuyWBWAhsag&s' // Replace with your image URL
  },
  {
    id: 3,
    title: 'Constitutional Law Cases',
    details: 'An appeal can be filed against any judgment, decree or final order of a High Court in a civil, criminal or other proceedings if the concerned High Court certifies that the case involves a substantial question of law as to the interpretation of the constitution.',
    image: 'https://www.lawnn.com/wp-content/uploads/2017/06/constitutional-laws-of-indis-cases-judgements.jpg' // Replace with your image URL
  },
  {
    id: 4,
    title: 'Commercial Cases',
    details: 'Commercial or business cases is civil cases involving one or more business entities as parties. Typically, the area of law being broken is specialized due to the nature of the parties involved.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBCIW5fiYBqjrLxdxbooIUtzVIWG4WgKkjew&s' // Replace with your image URL
  },
  {
    id: 5,
    title: 'Labour Cases',
    details: 'The term labour means productive work especially physical work done for wages. Labour law also known as employment law is the body of laws, administrative rulings, and precedents which address the legal rights of, and restrictions on, working people and their organizations.',
    image: 'https://www.insaaf.co.in/media/43/1669364679.png' // Replace with your image URL
  },
  {
    id: 6,
    title: 'Environmental Law Cases',
    details: 'A legal framework comprising principles, directives, policies, and regulations founded by different local, national, or international units. Its purpose is to safeguard and maintain the environment, verifying its appropriateness for both present and future generations.',
    image: 'https://www.maansarovarlawcentre.com/img/blog/mlc-blog-1.jpg' // Replace with your image URL
  },
  {
    id: 7,
    title: 'Taxation Cases',
    details: 'Taxation is a means by which governments finance their expenditure by imposing charges on citizens and corporate entities. Governments use taxation to encourage or discourage certain economic decisions.',
    image: 'https://media.licdn.com/dms/image/C4D12AQHTgi1u8djfDA/article-cover_image-shrink_720_1280/0/1601717064450?e=2147483647&v=beta&t=U6Yae7S1aQ17zYyV3TyTKs7MA7Gw_VMl0t3GeSuIibc' // Replace with your image URL
  },
  {
    id: 8,
    title: 'Human Rights Cases',
    details: 'Human rights are moral principles or norms that describe certain standards of human behaviour and are regularly protected as natural and legal rights in municipal and international law.',
    image: 'https://blog.ipleaders.in/wp-content/uploads/2021/07/Human-rights.jpg'
  }, 
  {
    id: 9,
    title: 'Election Law Cases',
    details: 'Election law is a discipline falling at the juncture of constitutional law and political science. It researches "the politics of law and the law of politics".',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-j3y38JQ7_MKr9Yrrbzcdc1baK5MT5vA7A&s'
  }
  // Add images for the remaining cases
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
            {/* Render the image */}
            <img src={caseItem.image} alt={caseItem.title} className="case-image" />
            <div className="case-title">{caseItem.title}</div>
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
