import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState(['eat','wash','walk']);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <>
    <div>
        <h1>To Do List</h1>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder='Enter a task...' />
        <button className='add-button' onClick={addTodo}>ADD</button>
    </div>
    <ol>
        {todos.map((task,index) => {
            <li key = {index}>
                <span>{todos}</span>
                <button onClick={() => {deleteTodo(index)}}>
                    Delete
                </button>
            </li>
        })}
    </ol>
    </>
  );
};

export default TodoList;
