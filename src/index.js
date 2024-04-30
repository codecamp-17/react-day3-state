// import 3rd Party
import React from 'react';
import ReactDOM from 'react-dom/client';

// import CSS to JS (Global CSS)
import './index.css';

// #1 UI ✅
// #2 Event : Handler -> 4 ที่
// - handler ✅
// - binding ✅

// #3 State - Management (Variant UI)
// - State สำหรับ Controlled Input (ตั้ง​ State => Binding Value => SetState ได้)
// - State สำหรับ Show Error Message * 3 (What State : Boolean , When State Change : Submit=>true, onChange=>false )
// - State สำหรับ Error Message (What:String, Where: <p> , When: Submit,Change)
//     username : required, length 8 - 24
//     password : required, length 8 - 16;
//     confirmPassword : required,  matching, length 8 - 16,
function App() {
  // State
  const [username, setUsername] = React.useState('');
  const [errorUserName, setErrorUsername] = React.useState(false);
  const [errorUserNameText, setErrorUserNameText] = React.useState('username is required !!');

  const [password, setPassword] = React.useState('');
  const [errorPassword, setErrorPassword] = React.useState(true);

  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = React.useState(true);
  // state สำหรับ password,confirmPassword

  // handler FN
  const handleChangeUserName = (event) => {
    setUsername(event.target.value);
    if (errorUserName) {
      setErrorUsername(false);
      setErrorUserNameText('');
    }
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    if (errorPassword) setErrorPassword(false);
  };
  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
    if (errorConfirmPassword) setErrorConfirmPassword(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation

    // Required
    if (!username) {
      setErrorUsername(true);
      setErrorUserNameText('username is required');
    } else if (username.length < 8 || username.length > 24) {
      setErrorUsername(true);
      setErrorUserNameText('username must have  8-24 character');
    }

    if (!password) setErrorPassword(true);
    if (password !== confirmPassword) setErrorConfirmPassword(true);
  };
  return (
    <div className='app'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Register Form</h2>
        <div className='form__input'>
          <label>username </label>
          <input className='input__error' value={username} onChange={handleChangeUserName} />
          {errorUserName && <p className='text__error'>{errorUserNameText}</p>}
        </div>
        <div className='form__input'>
          <label>password </label>
          <input
            type='password'
            className='input__success'
            value={password}
            onChange={handleChangePassword}
          />
          {errorPassword && <p className='text__error'>password is required</p>}
        </div>
        <div className='form__input'>
          <label>confirm password </label>
          <input type='password' value={confirmPassword} onChange={handleChangeConfirmPassword} />
          {errorConfirmPassword && <p className='text__error'>confirm password mismatch</p>}
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
