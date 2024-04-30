// import 3rd Party
import React from 'react';
import ReactDOM from 'react-dom/client';

// import CSS to JS (Global CSS)
import './index.css';

function App() {
  return (
    <div className='app'>
      <form className='form'>
        <h2>Register Form</h2>
        <div className='form__input'>
          <label>username </label>
          <input />
        </div>
        <div className='form__input'>
          <label>password </label>
          <input />
        </div>
        <div className='form__input'>
          <label>confirmPassword </label>
          <input />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
