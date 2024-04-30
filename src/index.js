import React from 'react';
import ReactDOM from 'react-dom/client';

// ## Lab3
// - UI
// - Handler Function
// - Binding Event (UI + Handler FN)
function App() {
  const handleCheck = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    console.log(event.target.checked);
  };
  return (
    <>
      <input
        type='checkbox'
        name='phoneBrand'
        id='phone-1'
        value='SAMSUNG'
        onChange={handleCheck}
      />
      <label htmlFor='phone-1'>Samsung</label>
      <br />
      <input
        type='checkbox'
        name='phoneBrand'
        id='phone-2'
        value='IPHOONE'
        onChange={handleCheck}
      />
      <label htmlFor='phone-2'>IPhoone</label> <br />
      <input type='checkbox' name='phoneBrand' id='phone-3' value='HUAWI' onChange={handleCheck} />
      <label htmlFor='phone-3'>HuaWi</label> <br />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
