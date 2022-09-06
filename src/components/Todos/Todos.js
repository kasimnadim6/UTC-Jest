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
    return () => {
      setTodos([]);
    };
  }, [url]);
  return (
    <div>
      <h2 style={{ color: ' #61dafb' }} data-testid="title">
        This is TODO component
      </h2>
      <h3>Demo API Call and Testing</h3>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyItems: 'center',
          alignItems: 'center',
          padding: '0 1rem',
        }}
      >
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              border: '2px solid white',
              borderRadius: '5px',
              padding: '1rem',
              flexGrow: '1',
            }}
          >
            <small>#{todo.id}</small>
            <h4>{todo.title}</h4>
            {todo.completed && (
              <small style={{ color: 'green', textTransform: 'uppercase' }}>
                Completed
              </small>
            )}
            {!todo.completed && (
              <small style={{ color: 'red', textTransform: 'uppercase' }}>
                Not Completed
              </small>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
