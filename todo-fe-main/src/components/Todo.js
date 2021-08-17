import '../styles/Todo.css';
import { FaCheck, FaTrash } from 'react-icons/fa';

function Todo({ todo, removeTodo, toggleTodoStatus }) {
  const todoStatus = todo.isComplete === true ? 'todo complete' : 'todo';

  return (
    <div className={todoStatus} id={todo.id}>
      <p>{todo.text}</p>
      <div>
        <FaTrash className="delete-icon" onClick={(e) => removeTodo(todo.id)} />
        <FaCheck onClick={(e) => toggleTodoStatus(todo.id)} />
      </div>
    </div>
  );
}

export default Todo;
