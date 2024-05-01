import React from 'react';
import ReactDOM from 'react-dom/client';

function Child(props) {
  // Handler Child
  const handleClick = () => {
    if (props.action === 'การบวก') {
      let result = props.addFN(props.num1, props.num2); // add(5,10) , add(5,20)
      console.log('Result', result);
    } else if (props.action === 'การลบ') {
      let result = props.minusFN(props.num1, props.num2); // minus(5,10) , minus(5,20)
      console.log('Result', result);
    }
  };
  return (
    <>
      <h2>Action : {props.action} </h2>
      <p>num1 : {props.num1}</p>
      <p>num2 : {props.num2}</p>
      <button onClick={handleClick}>Calculate</button>
      <p>Result : </p>
    </>
  );
}

function Parent() {
  // Parent's Data : string | number | boolean | null | undefined | Object | Array etc.
  const n1 = 5;
  const n2 = 10;
  const action1 = 'การบวก';
  const action2 = 'การลบ';
  // Parent's Logic : Function
  const add = (x, y) => x + y;
  const minus = (x, y) => x - y;
  // Share Parent's Data via Props (ส่ง props เป็น datatype ทั่วไป)
  // Share Parent's Logic via Props (ส่ง props เป็น Fn)
  return (
    <>
      <Child num1={n1} num2={n2} action={action1} addFN={add} minusFN={minus} />
      <Child num1={n1} num2={n2 + 10} action={action2} addFN={add} minusFN={minus} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent />);
