import React from 'react';
import ReactDOM from 'react-dom/client';

// Event Handler : Step
// - UI
// - UI มี Interaction ? => Handler Fn
// - Binding Fn

// State
// - ใช้ State จัดการอะไร => <h2> (Condition Render)
// - hardCode State ด้วย JS-Variable => Test Toggle ✅
// - ใช้ State (state ตั้งต้น) => Binding Value กับ UI

function App() {
  const [isShow, setIsShow] = React.useState(true);

  const handleClick = () => {
    console.log('click');
    setIsShow(false);
  };

  // const isShow = true;
  return (
    <>
      <button onClick={handleClick}>Click to hide text</button>
      {isShow && <h2>Text</h2>}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
