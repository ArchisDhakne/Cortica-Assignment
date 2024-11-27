import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup'
import StudentDashboard from './pages/StudentDashboard'
import TeacherDashboard from './pages/TeacherDashboard'
import AdminDashboard from './pages/AdminDashboard'
import Home from './pages/Home';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/studentdashboard' element={<StudentDashboard/>} />
        <Route path='/teacherdashboard' element={<TeacherDashboard/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>


      </Routes>
    </Router>
  );
}

export default App;
