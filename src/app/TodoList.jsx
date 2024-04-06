'use client'

import { useEffect, useState } from "react"

const TodoList = () => {

    

    const [todos, setTodos] = useState(['hello','dsdfs']);
    const [task, setTask] = useState('')

  // Load TODOs from local storage on app startup
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Update local storage whenever TODOs change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
        
    const AddTask = () => {
        if (task.trim() !== '') {
            setTodos([...todos, task]);
            setTask('');
        }
    }

    return (
        <div>
            <form onSubmit={(event) => { event.preventDefault() }}>
                <input type="text" placeholder="Enter your task" value={task} onChange={(e) => setTask(e.target.value)} />
                <button type="button" onClick={AddTask}>Add</button>
            </form>

            <div>
                {todos.map((item, index) => (
                    <div className="flex gap-3" key={index}>
                        <p>{item}</p>
                        <button>X</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoList;
