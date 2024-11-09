import React,{useState,useEffect} from 'react';
import TaskList from '../Components/TaskList';
import {getTasks,createTask,updateTask,deleteTask} from '../services/api';
import Footer from '../Components/Footer';
const Home = () => {
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(null);
    const[newTask, setNewTask] = useState({title:'',description:'',dueDate:new Date(),completed:false,priority:'Medium'});
    const[tasks, setTasks] = useState([
        {
            id: 1,
            title: 'MERN stack project',
            description: 'on attending the seminar on the web devlopment by vercel platform',
            dueDate: '10th of february',
            completed: false,
            priority: 'Medium',
        },
        {
            id: 2,
            title: 'going to the shop',
            description: 'buying some food items',
            completed: true,
            priority: 'easy',
        },
        {
            id:3,
            title:'College project',
            description:"working on the project",
            completed:true,
            priority:'medium'
        }
    ]); 
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await getTasks();
                setTasks(res.data);
                setLoading(true);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchTasks();
    }, []);

    const handleCreateTask = async (e) => {
        e.preventDefault();
        try {
            const res = await createTask(newTask);
            setTasks([...tasks, res.data]);
            setNewTask({title:'',description:'',dueDate:new Date(),completed:false,priority:'Medium'});
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const handleUpdateTask = async (id,updatedTask) => {
        try {
            const res = await updateTask(updatedTask.id, updatedTask);
            setTasks(tasks.map((task) => {
                if (task.id === id) {
                    return res.data;
                }
                return task;
            }));
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            const res = await deleteTask(id);
            console.log(res);
            setTasks(tasks.filter((task) => task.id !== id));
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };
    return (
       <div>
        <Footer />
        {error && <div className="error">{error.message}
            {loading? (
                <p>Loading...</p>
            ):(
                <>
                <form onSubmit={handleCreateTask}>
                    <input
                        type="text"
                        placeholder='Enter task title'
                        value={newTask.title}
                        onChange={(e)=>setNewTask({...newTask,title:e.target.value})}
                        className="border rounded-lg p-2"
                        required
                    />
                    <textarea
                        placeholder='Enter task description'
                        value={newTask.description}
                        onChange={(e)=>setNewTask({...newTask,description:e.target.value})}
                        className="border rounded-lg p-2"
                        required
                    />
                    <input
                        type="date"
                        placeholder='Enter task due date'
                        value={newTask.dueDate}
                        onChange={(e)=>setNewTask({...newTask,dueDate:e.target.value})}
                        className="border rounded-lg p-2"
                        required
                    />
                    <select
                        name="priority"
                        value={newTask.priority}
                        onChange={(e)=>setNewTask({...newTask,priority:e.target.value})}
                        className="border rounded-lg p-2"
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    <button type="sumbit" className='bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-600'>Add Task</button>
                </form>    
                <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} handleUpdateTask={handleUpdateTask}/>
                </>
                )}
            </div>}
        </div>
    );
};
export default Home;