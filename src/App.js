import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Order from './Pages/OrderPage';
import SignUp from './Components/SignUp';

const App = () => {
  return (
    <Router>
        <Routes> 
          {/* <Route exact path="/login" element={<Login />}></Route> */}
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/order" element={<Order />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
  )
}

export default App
