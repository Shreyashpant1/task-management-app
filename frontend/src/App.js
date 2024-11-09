import React from 'react';
import TaskList from './Components/TaskList';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from'./Pages/Login';
import Contact from './Components/Contact';
import About from './Pages/About';
import Signup from './Pages/Signup';
import Logout from './Pages/Logout';








function App() {
  return (
    <Router>
    <div className="min-h-screen bg-gray-100 p-6">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/tasks" element={<TaskList />}/>
        <Route path="/home/login" element={<Login />}/>
        <Route path="/contact" element={<Contact />}/> 
        <Route path="/about" element={<About />}/>
        <Route path="/home/signup" element={<Signup />}/>
        <Route path="/home/logout" element={<Logout />}/>
      </Routes>
      </div>
    <div className="min-h-screen bg-gray-100 p-6">
      <TaskList /> 
    </div> 
    </div> 
    </Router>
  );
};

export default App;