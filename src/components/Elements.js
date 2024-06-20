import React from 'react';

const makeDraggable = (Component, type) => ({ children, ...restProps }) => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', type);
    };

    return (
        <Component
            {...restProps}
            draggable
            onDragStart={handleDragStart}
        >
            {children}
        </Component>
    );
};

const Heading1 = makeDraggable('h1', 'heading1');
const Heading2 = makeDraggable('h2', 'heading2');
const Paragraph = makeDraggable('p', 'paragraph');


export { Heading1, Heading2, Paragraph };
