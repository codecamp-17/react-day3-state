import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className='app'>
      <h1>Carousel App</h1>
      <div className='carousel'>
        <div className='carousel__prev'>
          <button className='carousel__btn'> prev </button>
        </div>
        <div className='carousel__content'>
          <img src='https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
        </div>
        <div className='carousel__next'>
          <button className='carousel__btn'> next </button>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
