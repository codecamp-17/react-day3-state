import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className='app'>
      <div className='accordion__list'>
        <div className='accordion'>
          <div className='accordion__title'>
            <h3>section title</h3>
            <button>toggle</button>
          </div>
          <div className='accordion__detail'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit id totam vitae at
            vero? Repellendus maxime animi eos eaque porro, in doloribus veritatis dolorum quasi
            voluptatibus. Error, similique non. Quaerat voluptas ad fugiat quisquam ducimus
            doloremque incidunt distinctio quas, libero ut iusto illum fugit tenetur voluptates
            soluta ipsam perferendis.
          </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
