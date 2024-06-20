import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

const ColorPicker = ({onChange}) => {
  const [color, setColor] = useState("#b32aa9");
  const [inputValue, setInputValue] = useState(color);

//   const handleTextInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleInputBlur = () => {
//     const isValidHex = /^#([0-9A-F]{3}){1,2}$/i.test(inputValue);
//     if (isValidHex) {
//         setColor(inputValue);
//     } else {
//       setInputValue(color);
//     }
//   };

const handleColorChange = (newColor) => {
    setColor(newColor);
    onChange(newColor); 
  };

  return (
    <div className="color-picker-container">
        <HexColorPicker color={color} onChange={handleColorChange}/>

        <div id="currentColor" data-id={color} className="value" style={{ borderLeftColor: color }}>
            Current color is {color}
        </div>

        {/* <label>
            Enter color in HEX: 
            <input
            type="text"
            value={inputValue}
            onChange={handleTextInputChange}
            onBlur={handleInputBlur}
            >{inputValue ? inputValue : color}</input>
        </label> */}

        <div className="buttons">
        <button onClick={() => setColor("#c6ad23")}>Choose gold</button>
        <button onClick={() => setColor("#556b2f")}>Choose green</button>
        <button onClick={() => setColor("#207bd7")}>Choose blue</button>
        </div>
    </div>
  );
};

export default ColorPicker;
