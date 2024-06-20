import React from 'react';

import './App.css';
import EditTemplate from './pages/EditTemplate';
import ResumeBuilder from './pages/ResumeBuilder';


function App() {
    return (
        <div className="app">
            <ResumeBuilder />
            <EditTemplate />
        </div>
    );
}

export default App;
