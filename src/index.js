import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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

const INIT_TODO = [
  { id: 1, task: 'Do Hw' },
  { id: 2, task: 'Play football' },
  { id: 3, task: 'Sleep' },
  { id: 4, task: 'Dinner' },
  { id: 5, task: 'Coding' },
];
function TodoList({ todoList, handleDelete, handleUpdate }) {
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
function TodoItem({ task, todoId, onUpdate, onDelete }) {
  // UI-State
  const [isEdit, setIsEdit] = useState(false);

  // Business-State
  const [newTask, setNewTask] = useState(task || '');

  // Handler
  const handleChangeInput = (event) => {
    setNewTask(event.target.value);
  };

  const handleEdit = () => {
    // EditMode : กด Save
    if (isEdit) onUpdate(todoId, newTask);
    setIsEdit((p) => !p);
  };

  const handleDelete = () => {
    onDelete(todoId);
  };
  return (
    <li className='todo__item'>
      {isEdit ? <input value={newTask} onChange={handleChangeInput} /> : <p>{task || ''}</p>}
      <button onClick={handleEdit}>{isEdit ? 'save' : 'edit'}</button>
      <button onClick={handleDelete}>x</button>
    </li>
  );
}

function App() {
  const [todoList, setTodoList] = useState(INIT_TODO || []);

  // ADD TODO
  const handleAddTodo = (task) => {
    const newTodo = [...todoList];
    newTodo.push({ id: newTodo.length + 1, task: task });
    setTodoList(newTodo);
  };

  // DELETE TODO => SetTodoList
  const handleDeleteTodo = (todoId) => {
    const foundedIndex = todoList.findIndex((todo) => todo.id === todoId);
    if (foundedIndex !== -1) {
      const remainTodo = [...todoList]; // clone oldTodo
      remainTodo.splice(foundedIndex, 1);
      setTodoList(remainTodo);
    }
  };
  // UPDATE TODO
  const handleUpdateTodo = (todoId, newTask) => {
    const foundedIndex = todoList.findIndex((todo) => todo.id === todoId);
    if (foundedIndex !== -1) {
      const newTodoList = [...todoList];
      let oldTodo = newTodoList[foundedIndex];
      oldTodo.task = newTask;
      setTodoList(newTodoList);
    }
  };

  return (
    <div className='app'>
      <div className='todo'>
        <h1>TodoList</h1>
        <AddTodo handleAdd={handleAddTodo} />
        <TodoList
          todoList={todoList}
          handleDelete={handleDeleteTodo}
          handleUpdate={handleUpdateTodo}
        />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
