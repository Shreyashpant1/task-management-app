import { useContext,useEffect } from 'react';
import { TaskContext } from '../Context/TaskContext';
import { getTasks,addTask,updateTask,deleteTask } from '../services/api';
const useTasks = () => {
    const {state,dispatch} = useContext(TaskContext);
    useEffect(()=>{
        const fetchalltasks = async () =>{
        try {
            const tasks = await getTasks();
            dispatch({type:'SET_TASKS',payload:tasks.data});
        } catch (error) {
            console.error('Error fetching tasks:', error);
            throw error;
        }
    };
    fetchalltasks();

},[dispatch]);
const addTask = async (task) =>{
    try {
        const response = await addTask(task);
        dispatch({type:'SET_TASKS',payload:response.data});
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
};
addTask();

const updateTask = async (task) =>{
    try {
        const response = await updateTask(task);
        dispatch({type:'SET_TASKS',payload:response.data});
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
};
updateTask();
const deleteTask = async (id) =>{
    try {
        const response = await deleteTask(id);
        dispatch({type:'SET_TASKS',payload:response.data});
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
};
deleteTask();
    return{
        tasks:state.tasks,
        filter:state.filter,
        sort:state.sort,
        setTasks:(tasks)=>dispatch({type:'SET_TASKS',payload:tasks}),
        setFilter:(filter)=>dispatch({type:'SET_FILTER',payload:filter}),
        setSort:(sort)=>dispatch({type:'SET_SORT',payload:sort}),
        addTask,
        updateTask,
        deleteTask,
    }
};
export default useTasks;
export {addTask,updateTask,deleteTask};