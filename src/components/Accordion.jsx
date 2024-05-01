import { useState } from 'react';

function Accordion({ title, content }) {
  const [isShow, setIsShow] = useState(false);

  const handleToggle = () => {
    setIsShow((p) => !p);
  };
  return (
    <div className='accordion'>
      <div className='accordion__title'>
        <h3>{title}</h3>
        <button onClick={handleToggle}>toggle</button>
      </div>
      {isShow && (
        <div className='accordion__detail'>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
