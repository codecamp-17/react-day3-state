import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function AddTodo() {
  return (
    <header className='todo__add'>
      <input />
      <button>add</button>
    </header>
  );
}

const INIT_TODO = [
  { id: 1, task: 'Do Hw' },
  { id: 2, task: 'Play football' },
  { id: 3, task: 'Sleep' },
  { id: 4, task: 'Dinner' },
  { id: 5, task: 'Coding' },
];
function TodoList() {
  const [todoList, setTodoList] = useState(INIT_TODO || []);

  // DELETE TODO : Execute / Fire
  const handleDelete = (todoId) => {
    const foundedIndex = todoList.findIndex((todo) => todo.id === todoId);
    if (foundedIndex !== -1) {
      const remainTodo = [...todoList]; // clone oldTodo
      remainTodo.splice(foundedIndex, 1);
      setTodoList(remainTodo);
    }
  };

  return (
    <ul className='todo__list'>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todoId={todo.id} task={todo.task} onDelete={handleDelete} />
      ))}
    </ul>
  );
}
function TodoItem(props) {
  return (
    <li className='todo__item'>
      <p>{props?.task || ''}</p>
      <button>edit</button>
      <button onClick={() => props.onDelete(props.todoId)}>x</button>
    </li>
  );
}

function App() {
  return (
    <div className='app'>
      <div className='todo'>
        <h1>TodoList</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
