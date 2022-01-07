import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from "./components/home";
import Navbar from "./components/navbar";
import {Form} from "./components/Form";
import FormToPrintTN from "./components/Forms/FormToPrintTN";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="act_form" element={<Form form={'act_form'} />}/>
                <Route path="invoice_form" element={<Form form={'invoice_form'} />}/>
                <Route path="ttn_form" element={<Form form={'ttn_form'} />}/>
                <Route path="tn_form" element={<FormToPrintTN/>}/>
                <Route path="/contract" element={<FormToPrintTN/>}/>
            </Routes>



        </div>
    );
}

export default App;
