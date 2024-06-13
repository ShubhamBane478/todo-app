import React from 'react';

export  function Todos({ todos }) {
  return <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <h3>{todo.description}</h3>
          <button>Mark as completed</button>
        </div>
      ))}
    </div>
  
}

export default Todos;
