import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Accordion from './components/Accordion';
const mockContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit id totam vitae at
vero? Repellendus maxime animi eos eaque porro, in doloribus veritatis dolorum quasi
voluptatibus. Error, similique non. Quaerat voluptas ad fugiat quisquam ducimus
doloremque incidunt distinctio quas, libero ut iusto illum fugit tenetur voluptates
soluta ipsam perferendis.`;

function App() {
  const [data, setData] = useState([
    { id: 1, title: 'Intro to React', content: mockContent },
    { id: 2, title: 'React Element', content: mockContent },
    { id: 3, title: 'JSX', content: mockContent },
    { id: 4, title: 'Function Component', content: mockContent },
    { id: 5, title: 'React State', content: mockContent },
  ]);
  return (
    <div className='app'>
      <div className='accordion__list'>
        {data.map((accordion) => (
          <Accordion key={accordion.id} title={accordion.title} content={accordion.content} />
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
