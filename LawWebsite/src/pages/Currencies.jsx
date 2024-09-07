import React, { useState } from 'react';
import './Currencies.css';

// Import GoogleGenerativeAI package (ensure you have this installed and configured correctly)

const Form = ({ onGenerateResponse, isLoading, setSituation }) => (
  <div className="container">
    <label>Case Type:</label>
    <input
      type="text"
      placeholder="e.g., Contract Dispute"
      onChange={(e) => setSituation(e.target.value)} // Capture dynamic input for use in the prompt
    />
    <label>Specific Tags:</label>
    <input
      type="text"
      placeholder="e.g., Breach of Contract"
    />
    <div className="date-range">
      <div>
        <label>Start Date:</label>
        <input
          type="date"
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="date"
        />
      </div>
    </div>
    <label>Jurisdiction:</label>
    <input
      type="text"
      placeholder="e.g., California"
    />
    <div className="button-container">
      <button onClick={onGenerateResponse} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Response'}
      </button>
    </div>
    {isLoading && <p className="loading">Loading...</p>}
  </div>
);

const Response = ({ response, isResponseAvailable }) => (
  <div className="container">
    <h2>LegalHub says:</h2>
    
    {isResponseAvailable && (
      <button className="download-button" onClick={() => {
      
      }}>
        Download as PDF
      </button>
    )}
  </div>
);

const MadeBy = () => (
  <div className='made-by'><span role="img" aria-label="symbol">❤️</span>Made with love by Kashish</div>
);

const App = () => {
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [situation, setSituation] = useState(''); // Capture situation for dynamic prompt

  // Mock function to represent Google Generative AI
  const handleGenerateResponse = async () => {
    try {
      setIsLoading(true);

      // Replace with your actual Google Generative AI logic
      const prompt = `You are a quick guidance for any law violation or government rule break. Provide (1) law mentioned in the government law/rule book, (2) Charges/fine/actions against the guilty according to the law, (3) Personal advice on what to do if found guilty and how to proceed further. The scenario is ${situation}.`;

      // Replace this with actual API call
      const mockGeneratedResponse = `
        Law: According to the XYZ Act, Section 123, this case involves a contract breach.
        Charges: A fine of $5,000 and a potential lawsuit.
        Advice: You should seek legal counsel and try to settle the dispute out of court if possible.`;

      setResponse(mockGeneratedResponse);
    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form
        onGenerateResponse={handleGenerateResponse}
        isLoading={isLoading}
        setSituation={setSituation} // Pass setter for situation to form
      />
      {response && <Response response={response} isResponseAvailable={!isLoading} />}
      <MadeBy />
    </div>
  );
};

export default App;
