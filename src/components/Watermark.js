import React from 'react';

const Watermark = ({logoImage, watermarkText, fontSize, color,}) => {

    const waterMarkStyle = {
        fontSize: `${fontSize}px`,
        color: color,
        opacity: 0.3,
    }


    return (
        <div className='watermark' style={waterMarkStyle}>
            <div style={{ display: 'flex', justifyContent:'center' }}>
                {watermarkText && (
                <p style={{ color: color === '#FFFFFF' ? 'black' : `${color}`, margin: '0 10px 0 1rem' }}>
                    {watermarkText}
                </p>
                )}
                {logoImage && (
                <div id="logo" style={{ width: '100px', height: 'auto' }}>
                    <img src={logoImage} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
                )}
            </div>
        </div>

    );
};

export default Watermark;
