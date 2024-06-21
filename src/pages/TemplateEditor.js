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
            margin: 0,
            padding: 0.1,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 1 },  
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().from(element).set(opt).toContainer().toCanvas().toImg().toPdf().get('pdf').then((pdf) => {
            
            const totalPages = pdf.internal.getNumberOfPages();

            for (let i = 1; i <= totalPages; i++) {
                pdf.setPage(i);
                pdf.setFontSize(10); 
                pdf.text(`Page ${i} of ${totalPages}`, 0.5, pdf.internal.pageSize.height - 0.5);  
            }
        }).save();
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
