//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";




function App() {
  const [color, setcolor] = useState('light');

  const [alert, setAlert] = useState('null');

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null)
    }, 2000)



  }

  const togglemode = () => {
    if (color === 'light') {
      setcolor('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enabled", "success")
    }
    else {
      setcolor('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabled", "success")

    }

  }


  const color1mode = () => {
    if (color === 'light') {
      setcolor('dark');
      document.body.style.backgroundColor = 'blue';
      showAlert("Blue mode is enabled", "success")
    }
    else {
      setcolor('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabled", "success")
    }
  }
  const color2mode = () => {
    if (color === 'light') {
      setcolor('dark');
      document.body.style.backgroundColor = 'yellow';
      showAlert("Yellow mode is enabled", "success")
    }
    else {
      setcolor('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabled", "success")
    }
  }


  return (
    <>
      <Router>
        {/*<Navbar title='Textutil' about ='abouttextutils'/>*/}


        <Navbar title='Textutils' color={color} togglemode={togglemode} color1mode={color1mode} color2mode={color2mode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <Textform heading='Write Your Text' color={color} showAlert={showAlert} />
            </Route>
          </Routes>



        </div>
      </Router>




    </>
  )
}

export default App;
