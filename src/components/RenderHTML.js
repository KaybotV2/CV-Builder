import React from 'react';

const RenderHTML = ({ HTML }) => {
   

    return (
        <span
            contentEditable
            dangerouslySetInnerHTML={{ __html: HTML }}
            style={{ display: 'inline-block', minHeight: '20px', minWidth: '20px', padding: '0 2.5rem'}}
        ></span>
    );
};

export default RenderHTML;
