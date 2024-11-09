import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;     // Replace with your API URL
export const getTasks = async () => {        //get all tasks
    try {
        const response = await axios.get(API_URL);
        return response.data;    // Return the response data
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};


export const createTask = async (task) => {     //create a new task
    try {
        const response = await axios.post(API_URL, task);
        return response.data;
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
};


export const updateTask = async (task) => {     //update a task
    try {
        const response = await axios.put(API_URL, task);
        return response.data;
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
};


export const deleteTask = async (id) => {     //delete a task
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
};

export const addTask = async (task) => {   //add a new task
    try {
        const response = await axios.post(API_URL, task);
        return response.data;
    } catch (error) {
        console.error('Error adding task:', error);
        throw error;
    }
};