import React from 'react';

const Tools = ({
    increaseFontSize,
    decreaseFontSize,
    togglePickerVisible,
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
    onWatermarkTextChange
}) => {

    const handleInputChange = (e) => {
        onWatermarkTextChange(e.target.value);
    };

    return (
        <div>
            <button onClick={increaseFontSize}>Increase Font Size</button>
            <button onClick={decreaseFontSize}>Decrease Font Size</button>
            <button onClick={togglePickerVisible}>Pick Color</button>
            <label>
                Text Color:
                <input type="color" onChange={handleTextColorChange} value={color} />
            </label>
            <label>
                Text fontSize:
                <input type="number" onChange={handleTextFontChange} />
            </label>
            <label>
                Header Color:
                <input type="color" onChange={handleHeaderColorChange} value={headerColor} />
            </label>
            <label>
                Header fontSize:
                <input type="number" onChange={handleHeaderFontChange} />
            </label>
            
            <label>
                Background Image:
                <input type="file" onChange={handleImageUpload} accept="image/*" />
            </label>
            <label>
                Background Color:
                <input type="color" onChange={handleBgColorChange} value={bgColor} />
            </label>
            <label>
                Background Opacity:
                <input type="range" min="0" max="1" step="0.1" value={bgImageOpacity} onChange={handleOpacityChange} />
            </label>
            <label>
                Header Height:
                <input
                    type="number"
                    value={headerHeight}
                    onChange={handleHeightChange}
                    style={{ marginLeft: '5px', width: '50px' }}
                />
                px
            </label>
            <label>
                Header Padding:
                <input
                    type="text"
                    value={headerPadding}
                    onChange={handlePaddingChange}
                    style={{ marginLeft: '5px', width: '80px' }}
                />
            </label>
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
        </div>
    );
};

export default Tools;
