import React from 'react';

const Watermark = ({logoImage, watermarkText, fontSize, color,}) => {

    const waterMarkStyle = {
        fontSize: `${fontSize}px`,
        color: color,
        opacity: 0.3,
    }


    return (
        <div style={waterMarkStyle}>
            {watermarkText && <p>{watermarkText}</p>}
            {logoImage && <div id="logo" style={{ width: '100px', height: 'auto', margin: '0 auto', marginBottom: '10px' }}>
                {logoImage && <img src={logoImage} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />}
            </div>}
        </div>
    );
};

export default Watermark;
