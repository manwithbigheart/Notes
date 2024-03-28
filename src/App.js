import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Route } from '@mui/icons-material';
import NptelAss from './components/NptelAss';
import Notes from './components/Notes';
import { useState } from 'react';
import { NotesProvider } from './data/NotesProvider';


function App() {


  return (
    <>
      <BrowserRouter basename="/" >
        <Navbar />
        <Header title="TY CSE" />
        <NotesProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/nptel" element={<NptelAss />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </NotesProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
