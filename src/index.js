import React from 'react';
import ReactDOM from 'react-dom/client';

// ## 1 : UI ✅

// ## 2 : Event Handler : Step (UI/ มี Event อะไรบ้าง / เกิดขึ้นเมื่อไหร่)
// - UI มี Interaction ? => Handler Fn ✅
// - Binding Fn ✅

// ## 3 : State (คิด 2 Version)
// - ใช้ State จัดการอะไร => <h2> (Condition Render)
// - hardCode State ด้วย JS-Variable => Test Toggle ✅
// - ใช้ State (state ตั้งต้น) => Binding Value กับ UI ✅
// - setState ใน Event ที่เหมาะสม

function App() {
  const [isShow, setIsShow] = React.useState(false);

  const handleClick = () => {
    console.log('Clicked');
    setIsShow(!isShow);
  };

  // <button> : Dynamic Text
  // const isShowBtn = true;

  // <h2>  : Dynamic UI
  // const isShowText = true;

  // Show : Hide && Text
  // Hide : "Show" และไม่มี Text
  return (
    <>
      <button onClick={handleClick}>{isShow ? 'Hide' : 'Show'}</button>
      {isShow && <h2>Text</h2>}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
