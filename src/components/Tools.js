import React, {useState} from 'react';

const Tools = ({
    handleTextColorChange,
    color,
    handleTextFontChange,
    handleHeaderColorChange,
    headerColor,
    handleHeaderFontChange,
    handleLogoUpload,
    handleImageUpload,
    handleBgColorChange,
    bgColor,
    handleOpacityChange,
    bgImageOpacity,
    handleHeightChange,
    headerHeight,
    handlePaddingChange,
    headerPadding,
    onWatermarkTextChange,
    onFontChange
}) => {

    const fontFamilies = [
        'Arial, Helvetica, sans-serif',
        'Arial Black, Gadget, sans-serif',
        'Comic Sans MS, cursive, sans-serif',
        'Impact, Charcoal, sans-serif',
        'Lucida Sans Unicode, Lucida Grande, sans-serif',
        'Tahoma, Geneva, sans-serif',
        'Trebuchet MS, Helvetica, sans-serif',
        'Verdana, Geneva, sans-serif',
        'Georgia, serif',
        'Palatino Linotype, Book Antiqua, Palatino, serif',
        'Times New Roman, Times, serif',
        'Courier New, Courier, monospace',
        'Lucida Console, Monaco, monospace',
        'Brush Script MT, cursive',
        'Copperplate, Papyrus, fantasy',
        'Papyrus, fantasy'
      ];
      

    const handleChange = (e) => {
        onFontChange(e.target.value);
    };

   
    const handleInputChange = (e) => {
        onWatermarkTextChange(e.target.value);
    };

    return (
        <div className='tools-container'>
            <hr></hr>
            <label>
                Upload logo:
                <input type="file" onChange={handleLogoUpload} accept="image/*" />
            </label>
            <label>
                Watermark Text:
                <input 
                    type="text" 
                    onChange={handleInputChange} 
                    placeholder="Enter watermark text"
            />
            </label>
            
            <hr></hr>
            <label htmlFor="fontFamily">Font Family: </label>
            <select id="fontFamily"  onChange={handleChange}>
                {fontFamilies.map((font, index) => (
                <option key={index} value={font}>
                    {font.split(',')[0]}
                </option>
                ))}
            </select>
            <label>
                Header font color:
                <input type="color" onChange={handleHeaderColorChange} value={headerColor} />
            </label>
            <label>
                Header font size:
                <input type="number" onChange={handleHeaderFontChange} />
            </label>
            <label>
                Paragraph font color:
                <input type="color" onChange={handleTextColorChange} value={color} />
            </label>
            <label>
                paragraph font size:
                <input type="number" onChange={handleTextFontChange} />
            </label>
            
            <hr></hr>
            <label>
                Header background image:
                <input type="file" onChange={handleImageUpload} accept="image/*" />
            </label>
            <label>
                Header background color:
                <input type="color" onChange={handleBgColorChange} value={bgColor} />
            </label>
            <label>
                Header background opacity:
                <input type="range" min="0" max="1" step="0.1" value={bgImageOpacity} onChange={handleOpacityChange} />
            </label>

            <hr></hr>
            <label>Header height (px):</label>
                <input
                    type="number"
                    value={headerHeight}
                    onChange={handleHeightChange}
                />
            <label>Header Padding:</label>
                <input
                    type="text"
                    value={headerPadding}
                    onChange={handlePaddingChange}
                />
        </div>
    );
};

export default Tools;
