import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Todos = () => {
  const url = `https://jsonplaceholder.typicode.com/todos?_limit=6`;
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setTodos(data);
    };
    fetchTodos();
  }, [url]);
  return (
    <div>
      <h2 data-testid="title">This is TODO component</h2>
      <h3>Demo API Call and Testing</h3>
      <div>
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{ border: '1px solid white', margin: '1rem 0' }}
          >
            <p>#{todo.id}</p>
            <h4>{todo.title}</h4>
            <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
