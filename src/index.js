import React from 'react';
import ReactDOM from 'react-dom/client';

// ## Lab2
// - UI
// - Handler Fn
// - UI + Handler FN (Binding Event)
function App() {
  const handleSelect = (event) => {
    console.log(event.target.value);
  };
  return (
    <select onChange={handleSelect}>
      <option value='THAILAND'>Thailand</option>
      <option value='LAOS'>Laos</option>
      <option value='MYANMAR'>Myanmar</option>
      <option value='VIETNAM'>VietNam</option>
      <option value='MALAYSIA'>Malaysia</option>
    </select>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
