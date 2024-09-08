// src/components/Home.js
import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <section className="intro">
        <h1>AI-Driven Legal Research Engine</h1>
        <p>
          Welcome to our AI-powered platform designed to assist judges, lawyers, 
          and legal researchers in finding relevant legal references, laws, and past cases efficiently.
        </p>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="card">
          <ol>
            <li>Enter case-related information in our simple input forms.</li>
            <li>Our system uses machine learning to match your input with relevant legal cases and laws.</li>
            <li>Receive legal references, case summaries, and suggestions for relevant laws.</li>
          </ol>
        </div>
      </section>

      <section className="features-overview">
        <h2>Features Overview</h2>
        <div className="card">
          <ul>
            <li>ML-powered case matching for legal research.</li>
            <li>Smart legal rule suggestions based on case type and jurisdiction.</li>
            <li>User-friendly forms for quick input of case details.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
