import axios from 'axios';
const URL = '/todos';

const getTodos = () => {
  return axios.get(URL).then((res) => res.data);
};

const postTodo = (todoObject) => {
  return axios.post(URL, todoObject);
};

const updateTodoStatus = (id) => {
  return axios.put(`${URL}/${id}`);
};

const deleteTodo = (id) => {
  return axios.delete(`${URL}/${id}`);
};

export { getTodos, postTodo, updateTodoStatus, deleteTodo };
