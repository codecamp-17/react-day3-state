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
  return (
    <ul className='todo__list'>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
}
function TodoItem() {
  return (
    <li className='todo__item'>
      <p>item-1</p>
      <button>edit</button>
      <button>x</button>
    </li>
  );
}

function App() {
  return (
    <div className='app'>
      <div class='todo'>
        <h1>TodoList</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
