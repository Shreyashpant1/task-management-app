import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({fetchTasks}) => {
    const[task, setTask] = useState({
        title: '',
        description: '',
        dueDate: new Date(),
        completed: false,
        priority: 'Medium',
    });
    const handlechange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
        console.log(handlechange);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/', task);
        fetchTasks();
        setTask({
            title: '',
            description: '',
            dueDate: new Date(),
            completed: false,
            priority: 'Medium',
        });
        console.log(handleSubmit);
    };
    return(
        <form className="flex flex-col space-y-4 p-4 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
            <label htmlFor="dueDate">dueDate</label>  
            <input type="date" id="dueDate" className="form-control" />          
            <input
            type="text"
            name="coding"
            placeholder="mern stack project"
            value={task.title}
            onChange={handlechange}
            className="border rounded-lg p-2"
            required
            />
            <textarea
            name="seminar attending"
            placeholder="on attending the seminar on the web devlopment by vercel platform"
            value={task.description}
            onChange={handlechange}
            className="border rounded-lg p-2"
            required
            />
            <select
            name="priority"
            value={task.priority}
            onChange={handlechange}
            className="border rounded-lg p-2"
            >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <button type="sumbit" className='bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-600'>Add Task</button>
        </form>
    )
    
};

export default TaskForm;