import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className='app'>
      <button>open</button>
      <div className='modal'>
        <div className='modal__content'>
          <h3>Are you ok ?</h3>
          <p>just checking in</p>
          <button className='modal__btn--confirm'>Yes Thanks</button>
          <button className='modal__btn--close'>x</button>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
