import { useState } from 'react';

function AddTodo({ handleAdd: handleAddTodo }) {
  const [task, setTask] = useState('');

  const handleChange = (event) => setTask(event.target.value);
  const handleAdd = () => {
    handleAddTodo(task);
    setTask('');
  };
  return (
    <header className='todo__add'>
      <input value={task} onChange={handleChange} />
      <button onClick={handleAdd}>add</button>
    </header>
  );
}

export default AddTodo;
