import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Home />
    </main>
  );
}

export default App;
