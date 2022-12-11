import React, { useState } from "react";
import './App.css';
import { Connexion } from "./Connexion";
import { Enregistrement } from './Enregistrement';
import { Home } from "./Home";
import { New } from "./New";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [currentForm, setCurrentForm] = useState('connexion');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Home />}>
        <Route index element={<Connexion/>}/>
        
        <Route path="/New" element={<New/>}/>
        <Route path="/Connexion" element={<Connexion/>}/>
        <Route path="/Enregistrement" element={<Enregistrement/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
