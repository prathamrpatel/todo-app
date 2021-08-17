import { useState } from 'react';
import '../styles/Form.css';
import uuid from 'react-uuid';
import { postTodo } from '../services/requests';

function Form({ todos, setTodos }) {
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    const todoObject = {
      id: uuid(),
      text: input,
      isComplete: false,
    };
    postTodo(todoObject);
    setTodos([todoObject, ...todos]);
    setInput('');
  };

  return (
    <div>
      <h1 className="greeting">What's the Plan for Today?</h1>
      <form className="todo-form" onSubmit={(e) => addTodo(e)}>
        <input
          className="input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="submit-btn" type="submit" disabled={!input}>
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default Form;
