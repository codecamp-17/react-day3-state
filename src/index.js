import React from 'react';
import ReactDOM from 'react-dom/client';

// ## Lab1
function App() {
  const handleChange = (event) => console.log(event.target.value);
  return <input onChange={handleChange} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
