import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className='app'>
      <div className='accordion__list'>
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
