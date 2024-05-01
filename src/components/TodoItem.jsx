import { useState } from 'react';

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

// export default​ : ส่งของไปให้ไฟล์อื่นใช้งาน (ส่งฟังก์ชัน Component ไปใช้งาน)
export default TodoItem;

// export name
// const num = 5;
// export { num };
