import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type RootState, type AppDispatch } from '../app/store';
import { addTodo, toggleTodo, removeTodo } from '../features/todoSlice';

const Todo: React.FC = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch<AppDispatch>();

  // Count tasks that are not completed
  const remaining = todos.filter(todo => !todo.completed).length;
  

  return (
    <div>
      <h2>Todo App</h2>
      <div>
        <strong>Tasks remaining: {remaining}</strong>
      </div>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={() => {
        if (text.trim()) {
          dispatch(addTodo(text));
          setText('');
        }
      }}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
            <span onClick={() => dispatch(toggleTodo(todo.id))} style={{cursor: 'pointer'}}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))} style={{marginLeft: 8}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;