import React from 'react';

const Watermark = ({logoImage, watermarkText, fontSize, color,}) => {

    const waterMarkStyle = {
        fontSize: `${fontSize}px`,
        color: color,
        opacity: 0.3,
    }


    return (
        <div className='watermark' style={waterMarkStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {watermarkText && (
                    <div style={{ flex: '0 0 auto', marginRight: '1rem' }}>
                        <p style={{ color: color === '#FFFFFF' ? 'black' : `${color}`, margin: '0' }}>
                            {watermarkText}
                        </p>
                    </div>
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
