import React, { useState, useEffect } from 'react';

const SaveTemplate = () => {
    const [resumeContent, setEditorContent] = useState([]);

    const STORAGE_KEY = 'resumeContent';

    useEffect(() => {
        const savedContent = localStorage.getItem(STORAGE_KEY);
        if (savedContent) {
            setEditorContent(savedContent);
        }
    }, [resumeContent]);

    const handleSave = () => {
        const cvTemplate = document.querySelector('.resume-builder-container');
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cvTemplate.innerHTML));
        alert('Content saved!');
    };

    const handleLoad = () => {
        if (resumeContent) {
            setEditorContent(resumeContent);
            alert('Content loaded!');
        } else {
            alert('No saved content found.');
        }
    };

    return (
        <div>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleLoad}>Load</button>
        </div>
    );
};

export default SaveTemplate;
