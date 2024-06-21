import React from 'react';

const Header = ({bgImageOpacity, bgColor, bgImage, headerHeight, headerPadding }) => {

    const headerStyle = {
        position: 'relative',
        height: `${headerHeight}px`,
        backgroundColor: bgColor ? `${bgColor}` : 'none',
        color: '#fff',
        textAlign: 'center',
        padding: `${headerPadding}px`,
        backgroundImage: bgImage ? `url(${bgImage})` : 'none',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: `rgba(0, 0, 0, ${bgImageOpacity})`, 
        zIndex: 0
    };

    return (
        <header style={headerStyle}>
             {(bgImage || bgColor) && <div style={overlayStyle}></div>}
        </header>
    );
};

export default Header;
