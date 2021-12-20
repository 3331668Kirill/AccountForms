import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from "./components/home";
import Navbar from "./components/navbar";
import {Form} from "./components/Form";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="act_form" element={<Form />}/>
            </Routes>



        </div>
    );
}

export default App;
