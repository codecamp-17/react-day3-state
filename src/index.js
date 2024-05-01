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
  // Schemas
  // Todo : {id:number , task:string}
  // TodoList : Array<Todo>
  const [todoList, setTodoList] = useState(INIT_TODO || []);

  // DELETE TODO => SetTodoList
  const handleDelete = (todoId) => {
    const foundedIndex = todoList.findIndex((todo) => todo.id === todoId);
    if (foundedIndex !== -1) {
      const remainTodo = [...todoList]; // clone oldTodo
      remainTodo.splice(foundedIndex, 1);
      setTodoList(remainTodo);
    }
  };

  // UPDATE TODO
  const handleUpdate = (todoId, newTask) => {
    const foundedIndex = todoList.findIndex((todo) => todo.id === todoId);
    if (foundedIndex !== -1) {
      const newTodoList = [...todoList];
      let oldTodo = newTodoList[foundedIndex];
      oldTodo.task = newTask;
      setTodoList(newTodoList);
    }
  };
  return (
    <ul className='todo__list'>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todoId={todo.id} // 1, 2, 3, ...
          task={todo.task} // "Do Hw", "Play football", "Sleep"
          onDelete={handleDelete} // (todoId) => {.... // code }
          onUpdate={handleUpdate}
        />
      ))}
    </ul>
  );
}
function TodoItem(props) {
  // UI-State
  const [isEdit, setIsEdit] = useState(false);

  // Business-State
  const [task, setTask] = useState(props?.task || '');

  // Handler
  const handleChangeInput = (event) => {
    setTask(event.target.value);
  };

  const handleEdit = () => {
    // EditMode : กด Save
    if (isEdit) props.onUpdate(props.todoId, task);
    setIsEdit((p) => !p);
  };

  const handleDelete = () => {
    props.onDelete(props.todoId);
  };
  return (
    <li className='todo__item'>
      {isEdit ? <input value={task} onChange={handleChangeInput} /> : <p>{props?.task || ''}</p>}
      <button onClick={handleEdit}>{isEdit ? 'save' : 'edit'}</button>
      <button onClick={handleDelete}>x</button>
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
