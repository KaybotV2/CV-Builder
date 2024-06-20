import React, { useState } from 'react';

import './App.css';
import ResumeTemplateBuilder from './pages/ResumeTemplateBuilder';
import TemplateEditor from './pages/TemplateEditor';


function App() {
    const [activeTab, setActiveTab] = useState('TemplateBuilder');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
      };

    return (
        <div className='app'>
            <header className="app-header">
                <h1>Resume Builder made for Recruitment Agencies</h1>
            </header>
            <div className="tabs">
                <button className={`tab-button ${activeTab === 'TemplateBuilder' ? 'active' : ''}`} onClick={() => handleTabChange('TemplateBuilder')}>
                    Template Builder
                </button>
                <button className={`tab-button ${activeTab === 'Template' ? 'active' : ''}`} onClick={() => handleTabChange('Template')}>
                    CV Template
                </button> 
            </div>
            {activeTab === 'TemplateBuilder' && <ResumeTemplateBuilder />}
            {activeTab === 'Template' && <TemplateEditor />}
        </div>
    );
}

export default App;
