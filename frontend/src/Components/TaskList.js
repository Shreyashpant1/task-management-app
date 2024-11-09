import React,{useState,useEffect} from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
const TaskList=()=>{
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);
    const [tasks,setTasks]=useState([
        {
            id:1,
            description:"welcome to react app",
            title:"react app",
            dueDate:new Date(),
            completed:false,
            priority:"Medium"
        },
        {
            id:2,
            description:"full stack development project",
            title:"nextjs app",
            dueDate:new Date(),
            completed:false,
            priority:"easy"
        },
        {
            id:3,
            description:"in ordert to add task you need to login",
            title:"welcome to taks ",
            dueDate:new Date(),
            completed:false,
            priority:"hard"
        }
    ]);
    useEffect(() => {
        let isMounted = true;
        const fetchTasks=async() =>{
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get('http://localhost:3000/');
                console.log("API response",response.data);
                if(isMounted){
                    const tasksArray = Array.isArray(response.data?.tasks) ? response.data.tasks:[];
                    const taskwithIdandDescription = tasksArray.map((task,index)=>({id:task.id ||index+1,
                        description:task.description||`Task ${index + 1} has no description`,
                        title:task.title||`Task ${index + 1} has no title`,
                        dueDate:task.dueDate||new Date(),
                        completed:task.completed||false,
                        priority:task.priority||'Medium'
                    }));
                    setTasks(taskwithIdandDescription);
                }
            } catch (error) {
                if(isMounted){
                    setError("error in taks" + error.message);
                }
                console.error("error in taks",error);
            } finally{
                if(isMounted){
                    setLoading(false);
                }
            }
        };
        fetchTasks();
        return () => {
            isMounted = false;
        };
    },[]);
    const addTask=(newtask)=>{
        const newId = tasks.length >0? tasks[tasks.length-1].id+1:1;
        setTasks((prevTasks)=>[...prevTasks,{...newtask,id:newId}]);
    };

    const deleteTask=(taskId)=>{
        setTasks((prevTasks)=>prevTasks.filter((task)=>task.id!==taskId));
    };
    if (loading){
        return <div>Loading...</div>;
    }
    if (error){
        return <div>Error: {error}</div>;
    }
    return(
        <div>
            <TaskForm addTask={addTask} />
            <ul>
                {tasks.map((task)=>(
                    <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
                ))}
            </ul>
        </div>
    );
}; 

export default TaskList;
            