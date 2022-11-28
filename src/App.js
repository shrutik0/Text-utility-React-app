import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import About from "./components/About";
import React from "react";
// import Switch from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  

  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode ("dark");
    document.body.style.backgroundColor ="#042743";
  }

  else{
    setMode("light");
    document.body.style.backgroundColor ="white";
  }
} 
  return (
    <>
    <Router>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
    <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm heading="TEXTUTILS- Word Counter,Character Counter ,RemoveExtraspaces" mode={mode}/>}>
          </Route>
    </Routes>     
    </div>
    </Router> 
    </>
  );
}

export default App;
