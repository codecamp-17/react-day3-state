import TodoItem from './TodoItem';

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

export default TodoList;
