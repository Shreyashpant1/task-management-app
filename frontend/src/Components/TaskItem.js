import React from "react";
const TaskItem = ({ task ,onDelete,onEdit}) => {
    console.log(task);
    return (
        <div className="flex flex-col space-y-2 p-4 bg-white shadow-md rounded-lg">
            <div className="flex flex-col">
                <div className="text-lg font-bold">{task.title || 'Untitled Task'}</div>
                <div className="text-sm text-gray-500">{task.description || 'No description'}</div>
            </div>
            <div className="flex justify-between">
                <button onClick={() =>onDelete(task.id)} className='text-black px-3 py-1 hover:text-blue-500'>DELETE</button>
                <button onClick={() =>onEdit(task.id)} className='text-black px-3 py-1 hover:text-blue-500'>EDIT</button>   
            </div>
        </div>
    );
};

export default TaskItem;