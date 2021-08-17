import { useState, useEffect } from 'react';
import './styles/App.css';
import Form from './components/Form';
import Todo from './components/Todo';
import { getTodos, updateTodoStatus, deleteTodo } from './services/requests';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((res) => {
      const reversedTodos = res.reverse();
      setTodos(reversedTodos);
    });
  }, []);

  const toggleTodoStatus = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        updateTodoStatus(id);
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    deleteTodo(id);
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="todo-app">
      <Form todos={todos} setTodos={setTodos} />

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodoStatus={toggleTodoStatus}
        />
      ))}
    </div>
  );
}

export default App;
