import axios from 'axios';
import { getTasks,addTask,updateTask,deleteTask } from './api';

const fetchTasks = async () => {
    try {
        const response = await getTasks();
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

const createTask = async (task) => {
    try {
        const response = await addTask(task);
        return response.data;
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
};

const updateTask = async (task) => {
    try {
        const response = await axios.put(API_URL, task);
        return response.data;
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
};


const deleteTask = async (id) => {
    try {
        const response = await deleteTask(id);
        return response.data;
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
};

export { fetchTasks, createTask, updateTask, deleteTask };