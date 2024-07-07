import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
//import Login from './login';
import ExamManagementComponent from './ExamManagement';
import Sidebar from './Sidebar';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comptes from './Comptes';
import Medecin from './medecin';
//import { Modal, Button } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
                <Header />
                <Sidebar />  
      <div > 
        <Routes>
          <Route path="/" element={<ExamManagementComponent />} />
          <Route path="/Sidebar" element={<Sidebar/>} />
          <Route path="/header" element={<Header/>} />
          <Route path="/Comptes" element={<Comptes />} />
          <Route path="/medecin" element={<Medecin />} />

        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
