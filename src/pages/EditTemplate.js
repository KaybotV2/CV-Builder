import React, { useState, useEffect, useRef } from 'react';

const EditTemplate = () => {
  const cvTemplateRef = useRef(null);
  const [cvContent, setCvContent] = useState('');

  useEffect(() => {
    const savedContent = localStorage.getItem('resumeContent');
    if (savedContent) {
      setCvContent(savedContent);
    }
  }, []);

  useEffect(() => {
    if (cvTemplateRef.current) {
      cvTemplateRef.current.innerHTML = cvContent;
    }
  }, [cvContent]);

  const saveContent = () => {
    if (cvTemplateRef.current) {
      const content = cvTemplateRef.current.innerHTML;
      localStorage.setItem('resumeContent', content);
    }
  };

  return (
    <div>
      <div
        id="editor"
        ref={cvTemplateRef}
        contentEditable={true} // Makes the div editable
      >
        {cvContent}
      </div>
      <button onClick={saveContent}>Save Content</button>
    </div>
  );
};

export default EditTemplate;
