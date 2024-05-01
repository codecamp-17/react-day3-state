import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [isShow, setIsShow] = useState(false);

  const handleToggle = () => {
    setIsShow((p) => !p);
  };
  return (
    <div className='app'>
      <div className='accordion__list'>
        <div className='accordion'>
          <div className='accordion__title'>
            <h3>section title</h3>
            <button onClick={handleToggle}>toggle</button>
          </div>
          {isShow && (
            <div className='accordion__detail'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit id totam vitae
                at vero? Repellendus maxime animi eos eaque porro, in doloribus veritatis dolorum
                quasi voluptatibus. Error, similique non. Quaerat voluptas ad fugiat quisquam
                ducimus doloremque incidunt distinctio quas, libero ut iusto illum fugit tenetur
                voluptates soluta ipsam perferendis.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
