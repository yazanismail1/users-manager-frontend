import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout';
import Signup from './components/Signup';


export default function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route exact path="/" element={<Layout />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
    </Router>
    </>
  );
}


