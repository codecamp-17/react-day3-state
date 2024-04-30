import React from 'react';
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
function TodoList() {
  const todoData = [
    { id: 1, task: 'Do Hw' },
    { id: 2, task: 'Play football' },
    { id: 3, task: 'Sleep' },
    { id: 4, task: 'Dinner' },
    { id: 5, task: 'Coding' },
  ];

  // data => UI
  // const todoUI = todoData.map((todo) => <TodoItem key={todo.id} task={todo.task} />);
  // return <ul className='todo__list'>{todoUI}</ul>;

  return (
    <ul className='todo__list'>
      {todoData.map((todo) => (
        <TodoItem key={todo.id} task={todo.task} />
      ))}
    </ul>
  );
}
function TodoItem(props) {
  return (
    <li className='todo__item'>
      <p>{props?.task || ''}</p>
      <button>edit</button>
      <button>x</button>
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
