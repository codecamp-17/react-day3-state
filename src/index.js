import React from 'react';
import ReactDOM from 'react-dom/client';

// ## Lab4
// - UI
// - Handler Function
// - Binding Event (UI + Handler FN)
function App() {
  const handleRedirect = (event) => {
    const ans = window.confirm('Redirect to google ?');
    if (ans === true) {
      // window.location.href = 'google.com';
      window.location.replace('https://google.com');
    }
  };
  return <a onClick={handleRedirect}>Google</a>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
