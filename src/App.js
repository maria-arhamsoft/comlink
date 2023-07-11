import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './components/main/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Guest routes here */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="*" element={<NoPageFound />} /> */}
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
