import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './components/main/Home/Home';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CableTv from './components/Pages/CableTv/CableTv';
import GetAQoute from './components/Pages/GetAQoute/GetAQoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Guest routes here */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cabletv" element={<CableTv />} />
            <Route path="/getaqoute" element={<GetAQoute />} />

            {/* Add your public routes here eg. <Route path="example" element={<Component />} /> */}
          </Route>
          {/* <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
