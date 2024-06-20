import React from 'react';

const Footer = ({footerBgColor, footerHeight, footerPadding }) => {
    
const footerStyle = {
    backgroundColor: {footerBgColor},
    color: '#fff',
    textAlign: 'center',
    position: 'relative',
    bottom: '0',
    width: '100%',
    height: `${footerHeight}px`,
    padding: `${footerPadding}px 0`,

};

    return (
        <footer style={footerStyle}>
          
        </footer>
    );
};


export default Footer;
