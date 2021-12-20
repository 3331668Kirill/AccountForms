import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from "./components/home";
import Navbar from "./components/navbar";
import {ActForm} from "./ActForm";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="act_form" element={<ActForm />}/>
            </Routes>



        </div>
    );
}

export default App;
