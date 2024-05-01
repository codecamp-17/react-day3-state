import React from 'react';
import ReactDOM from 'react-dom/client';

function Child(props) {
  const [result, setResult] = React.useState(0);
  // Handler Child
  const handleClick = () => {
    if (props.action === 'การบวก') {
      let result = props.addFN(props.num1, props.num2); // add(5,10) , add(5,20)
      setResult(result);
    } else if (props.action === 'การลบ') {
      let result = props.minusFN(props.num1, props.num2); // minus(5,10) , minus(5,20)
      setResult(result);
    }
  };
  const handleIncrease = () => props.setN1((p) => p + 1);
  return (
    <>
      <h2>Action : {props.action} </h2>
      <p>num1 : {props.num1}</p>
      <p>num2 : {props.num2}</p>
      <button onClick={handleClick}>Calculate</button>
      <button onClick={handleIncrease}> +1 : num1</button>
      <p>Result : {result} </p>
    </>
  );
}

function Parent() {
  // Parent's Data : string | number | boolean | null | undefined | Object | Array etc.
  const [n1, setN1] = React.useState(5);
  const [n2, setN2] = React.useState(10);
  const action1 = 'การบวก';
  const action2 = 'การลบ';

  // Parent's Logic : Function
  const add = (x, y) => x + y;
  const minus = (x, y) => x - y;
  // Share Parent's Data via Props (ส่ง props เป็น datatype ทั่วไป)
  // Share Parent's Logic via Props (ส่ง props เป็น Fn)
  return (
    <>
      <button onClick={() => setN1((p) => p + 1)}>+1 : num1</button>
      <Child num1={n1} num2={n2} action={action1} addFN={add} minusFN={minus} setN1={setN1} />
      <Child num1={n1} num2={n2 + 10} action={action2} addFN={add} minusFN={minus} setN1={setN1} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent />);
