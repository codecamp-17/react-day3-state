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
//  ฝึกทำ State Management 15-20 นาที
//  - validation Text
//  - border
function App() {
  // State-Refactor
  const [userData, setUserData] = React.useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = React.useState({
    errorUserName: '',
    errorPassword: '',
    errorConfirmPassword: '',
  });

  // State
  const [isSubmit, setIsSubmit] = React.useState(false);

  // handler FN
  const handleChangeUserName = (event) => {
    setIsSubmit(false);
    setUserData({ ...userData, username: event.target.value });
    if (error.errorUserName) {
      setError({ ...error, errorUserName: '' });
    }
  };
  const handleChangePassword = (event) => {
    setIsSubmit(false);
    setUserData({ ...userData, password: event.target.value });
    if (error.errorPassword) {
      setError({ ...error, errorPassword: '' });
    }
  };
  const handleChangeConfirmPassword = (event) => {
    setIsSubmit(false);
    setUserData({ ...userData, confirmPassword: event.target.value });
    if (error.errorConfirmPassword) {
      setError({ ...error, errorConfirmPassword: '' });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(true);
    // Validation
    const { username, password, confirmPassword } = userData;

    // Required
    if (!username) {
      setError({ ...error, errorUserName: 'username is required' });
    } else if (username.length < 8 || username.length > 24) {
      setError({ ...error, errorUserName: 'username must have  8-24 character' });
    }

    if (!password) {
      setError({ ...error, errorPassword: 'password is required' });
    } else if (password.length < 8 || password.length > 16) {
      setError({ ...error, errorPassword: 'password must have 8-16 character' });
    }
    if (!confirmPassword) {
      setError({ ...error, errorConfirmPassword: 'confirm password is required' });
    } else if (confirmPassword.length < 8 || confirmPassword.length > 16) {
      setError({ ...error, errorConfirmPassword: 'confirm password must have 8-16 character' });
    } else if (password !== confirmPassword) {
      setError({ ...error, errorConfirmPassword: 'confirm password mismatch' });
    }

    // Save Backend
    // if any Error => Early Return
    // if not Error => Save Backend

    // ResetForm => ทำให้ State ทุกตัวกลับไปที่ค่าเดิม
  };
  return (
    <div className='app'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Register Form</h2>
        <div className='form__input'>
          <label>
            username<span className='required__text'>*</span>
          </label>
          <input
            className={
              (error.errorUserName ? 'input__error' : '') || (isSubmit ? 'input__success' : '')
            }
            value={userData?.username || ''}
            onChange={handleChangeUserName}
          />
          {error.errorUserName && <p className='text__error'>{error.errorUserName}</p>}
        </div>
        <div className='form__input'>
          <label>
            password<span className='required__text'>*</span>
          </label>
          <input
            type='password'
            className={
              (error.errorPassword ? 'input__error' : '') || (isSubmit ? 'input__success' : '')
            }
            value={userData?.password || ''}
            onChange={handleChangePassword}
          />
          {error.errorPassword && <p className='text__error'>{error.errorPassword}</p>}
        </div>
        <div className='form__input'>
          <label>
            confirm password<span className='required__text'>*</span>
          </label>
          <input
            type='password'
            className={
              (error.errorConfirmPassword ? 'input__error' : '') ||
              (isSubmit ? 'input__success' : '')
            }
            value={userData?.confirmPassword || ''}
            onChange={handleChangeConfirmPassword}
          />
          {error.errorConfirmPassword && (
            <p className='text__error'>{error.errorConfirmPassword}</p>
          )}
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
