const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dueDate:{
        type: Date,
        required: true,
    },
    completed:{
        type: Boolean,
        default: false,
    },
    priority:{
        type: Number,
        enum:['Low','Medium','High'],
        default:'medium',
    },
});
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;