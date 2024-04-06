'use client'

import { useEffect, useState } from "react"

const TodoList = () => {

    

    const [todos, setTodos] = useState([]);
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

    const RemoveTask = (index) =>{
       const filterTodoAfterDel = todos.filter((_,i)=> i != index);
       setTodos(filterTodoAfterDel)
    }

    return (
        <div className="flex justify-center items-center h-screen flex-col bg-slate-900 text-white">
            <div>
            <form className="flex gap-4" onSubmit={(event) => { event.preventDefault() }}>
                <input className="bg-[#302f2f3c] p-4 outline-none  text-white rounded-xl" type="text" placeholder="Enter your task" value={task} onChange={(e) => setTask(e.target.value)} />
                <button className="px-4 py-2 rounded-xl bg-green-400" type="button" onClick={AddTask}>Add</button>
            </form>

            <div>
                {todos.map((item, index) => (
                    <div className="flex my-2 justify-between items-center shadow-sm shadow-blue-300 rounded-xl border-[#716f6f] p-2 bg-slate-700 gap-3" key={index}>
                        <p>{item}</p>
                        <button type="button" onClick={()=>RemoveTask(index)} className="bg-red-500 cursor-pointer px-4 py-2">X</button>
                    </div>
                ))}
            </div>
            </div>

        </div>
    )
}

export default TodoList;
