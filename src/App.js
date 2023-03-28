import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "black"
      showAlert("Hero hogya dark", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Hero hogya light", "success")
      
    }
  }
  return ( 
    <>
    <BrowserRouter>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert
        alert={alert}
      />
      <Routes>
        <Route exact path="/" element={
          <TextForm
          heading="Text Area"
          mode={mode}
          />
        } />
        <Route exact path="/about" element={<About
          mode={mode}
        />
        } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
