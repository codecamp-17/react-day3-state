// import 3rd Party
import React from 'react';
import ReactDOM from 'react-dom/client';

// import CSS to JS (Global CSS)
import './index.css';

// #1 UI ✅
// #2 Event : Handler -> 4 ที่
// - handler ✅
// - binding ✅

function App() {
  // handler FN
  const handleChangeUserName = (event) => console.log(event.target.value);
  const handleChangePassword = (event) => console.log(event.target.value);
  const handleChangeConfirmPassword = (event) => console.log(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  };
  return (
    <div className='app'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Register Form</h2>
        <div className='form__input'>
          <label>username </label>
          <input className='input__error' onChange={handleChangeUserName} />
          <p className='text__error'>username is required</p>
        </div>
        <div className='form__input'>
          <label>password </label>
          <input className='input__success' onChange={handleChangePassword} />
          <p className='text__error'>password is required</p>
        </div>
        <div className='form__input'>
          <label>confirm password </label>
          <input onChange={handleChangeConfirmPassword} />
          <p className='text__error'>confirm password mismatch</p>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
