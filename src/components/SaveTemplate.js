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
        const cvTemplate = document.querySelector('#editor');
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cvTemplate.innerHTML));
        alert('Content saved!');
    };

    return (
        <div>
            <button onClick={handleSave}>Save Template</button>
        </div>
    );
};

export default SaveTemplate;
