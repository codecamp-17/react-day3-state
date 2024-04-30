import React from 'react';
import ReactDOM from 'react-dom/client';

// Event Handler : Step
// - UI
// - UI มี Interaction ? => Handler Fn
// - Binding Fn

// State
// - ใช้ State จัดการอะไร (eg. ข้อมูลแสดงผล, เปลี่ยนการแสดงผล ✅)
// - hardCode State ด้วย JS-Variable => Test Toggle ✅
// - ใช้ State (state ตั้งตั้น) => Binding Value กับ UI

function App() {
  const [isShow, setIsShow] = React.useState(true);

  const handleClick = (event) => {
    console.log('Click');
    setIsShow(false);
  };

  // const isShow = false;

  return <>{isShow ? <button onClick={handleClick}>Click to hide me</button> : null}</>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
