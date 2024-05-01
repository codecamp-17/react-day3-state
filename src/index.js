import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className='app'>
      <h1 className='app__title'>Shopping List App</h1>
      <div className='shopping'>
        <div className='shopping__header'>
          <h3>Items to buy</h3>
        </div>
        <div className='shopping__add'>
          <input />
          <button>add</button>
        </div>
        <div className='shopping__list'>
          <ul>
            <li className='shopping__list--item'>
              IPA <span className='x__mark'> x </span>
            </li>
            <li className='shopping__list--item'>
              IPA <span className='x__mark'> x </span>
            </li>
            <li className='shopping__list--item'>
              IPA <span className='x__mark'> x </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
