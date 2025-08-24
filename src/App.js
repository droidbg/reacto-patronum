import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TicTacToe from './pages/TicTacToe/TicTacToe';
import HooksPractice from './pages/HooksPractice';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/hooks-practice" element={<HooksPractice />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
