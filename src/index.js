import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className='app'>
      <div class='todo'>
        <header className='todo__add'>
          <h1>TodoList</h1>
          <input />
          <button>add</button>
        </header>
        <ul className='todo__list'>
          <li className='todo__item'>
            <p>item-1</p>
            <button>edit</button>
            <button>x</button>
          </li>
          <li className='todo__item'>
            <p>item-2</p>
            <button>edit</button>
            <button>x</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
