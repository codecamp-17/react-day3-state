import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const INIT_TODO = [
  { id: 1, task: 'Do Hw' },
  { id: 2, task: 'Play football' },
  { id: 3, task: 'Sleep' },
  { id: 4, task: 'Dinner' },
  { id: 5, task: 'Coding' },
];

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

export default App;
