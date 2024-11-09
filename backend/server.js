const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
connectDB();
const tasksRouter = require('./routes/tasks');
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/tasks', tasksRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running on port 3000');
});
