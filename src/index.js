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
          <input className='input__error' />
          <p className='text__error'>username is required</p>
        </div>
        <div className='form__input'>
          <label>password </label>
          <input className='input__success' />
          <p className='text__error'>password is required</p>
        </div>
        <div className='form__input'>
          <label>confirmPassword </label>
          <input />
          <p className='text__error'>confirm password mismatch</p>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
