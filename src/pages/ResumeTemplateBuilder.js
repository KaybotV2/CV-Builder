import React, { useState } from 'react';
import Editor from '../components/Editor';
import { Heading1, Heading2, Paragraph} from '../components/Elements';
import ErrorBoundary from '../components/ErrorBoundary';
import SaveTemplate from '../components/SaveTemplate';



const ResumeTemplateBuilder = () => {
    const [droppedElements, setDroppedElements] = useState([]);

    const handleDropInEditor = (e) => {
        e.preventDefault();
        const droppedData = e.dataTransfer.getData('text/plain');

        let elementHTML;
        let fontSize; 
        let pickColor;

        switch (droppedData) {
            case 'heading1':
                elementHTML = `<div class="heading1" style="font-size: 32px; color: ${pickColor};">Add a heading</div>`;
                break;
            case 'heading2':
                elementHTML = `<div class="subheading" style="font-size: 24px; color: ${pickColor};">Add a subheading</div>`;
                break;
            case 'paragraph':
                elementHTML = `<div class="paragraph" style="font-size: 16px; color: ${pickColor};">Add body text</p>`;
                break;
            default:
                return;
        }

        setDroppedElements([...droppedElements, { html: elementHTML, id: Date.now(), fontSize: parseInt(fontSize), color: pickColor }]);
    };


    const handleDragOverInEditor = (e) => {
        e.preventDefault();
    };

    const deleteElement = (index) => {
        const newElements = droppedElements.filter((_, i) => i !== index);
        setDroppedElements(newElements);
    };

    const cloneElement = (index) => {
        setDroppedElements(prevElements => 
            prevElements.flatMap((element, i) => 
                i === index ? [element, { ...element, id: Date.now() }] : [element]
            )
        );
    };

   
    return (
        <ErrorBoundary>
            <div className="resume-builder-container">
                <Editor
                    droppedElements={droppedElements}
                    handleDragOverInEditor={handleDragOverInEditor}
                    handleDropInEditor={handleDropInEditor}
                    deleteElement={deleteElement}
                    cloneElement={cloneElement}
                    setDroppedElements={setDroppedElements}
                />
                <div className='dragable-text'>
                    <Heading1>Add a heading</Heading1>
                    <Heading2>Add a subheading</Heading2>
                    <Paragraph>Add body text</Paragraph>
                </div>
                <SaveTemplate />
            </div>
        </ErrorBoundary>
    );
};

export default ResumeTemplateBuilder;
