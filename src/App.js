import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import CollectClinicals from './components/CollectClinicals';
import AddPatient from './components/AddPatient';
import AnalyzeData from './components/AnalyzeData';
import ChartGenerator from './components/ChartGenerator';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route exect path="/" element={<Home/>}/>
        <Route exect path="/patientDetails/:patientId" element={<CollectClinicals/>}/>
        <Route exect path="/addPatient" element={<AddPatient/>}/>
        <Route exect path="/analyze/:patientId" element={<AnalyzeData/>}/>
        <Route exect path="/chart/:componentName/:patientId" element={<ChartGenerator/>}/>
       </Routes>
    </div>
  );
}

export default App;
