import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import "../src/styles/style.css"
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/styles/theme';
import Register from './pages/Auth/Register';

function App() {
  return (
    <ThemeProvider theme={theme}>

      <Router>
      <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register/>} />
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
