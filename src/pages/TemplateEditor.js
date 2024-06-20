import React, { useState, useEffect, useRef } from 'react';
import html2pdf from 'html2pdf.js';

const TemplateEditor = () => {
  const cvTemplateRef = useRef(null);
  const [cvContent, setCvContent] = useState('');

  useEffect(() => {
    const savedContent = localStorage.getItem('resumeContent');
    if (savedContent) {
      setCvContent(JSON.parse(savedContent));
    }
  }, []);

  useEffect(() => {
    if (cvTemplateRef.current) {
      cvTemplateRef.current.innerHTML = cvContent;
    }
  }, [cvContent]);

  const convertToPDF = () => {
    if (cvTemplateRef.current) {
      const element = cvTemplateRef.current;
      const opt = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().from(element).set(opt).save();
    }
  };

  return (
    <div className='template-container'>
      <h1>Template</h1>
      <button onClick={convertToPDF}>Convert To PDF</button>
      <div
        id="editor"
        ref={cvTemplateRef}
      >
        {cvContent}
      </div>
    </div>
  );
};

export default TemplateEditor;
