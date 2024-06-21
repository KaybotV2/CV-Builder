import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import RenderHTML from './RenderHTML';
import ColorPicker from './ColorPicker';
import Footer from './Footer';
import Header from './Header';
import ResumeData from './ResumeData';
import Tools from './Tools';
import Watermark from './Watermark';


const Editor = ({ droppedElements, handleDragOverInEditor, handleDropInEditor, deleteElement, cloneElement, setDroppedElements }) => {
    const editorRef = useRef(null);
    const [isPickerVisible, setPickerVisible] = useState(false);
    const [currentElementIndex, setCurrentElementIndex] = useState(null);
    const [currentElement, setCurrentElement] = useState(null);
    const [bgImageOpacity, setBgImageOpacity] = useState(0);
    const [logoImage, setLogoImage] = useState('');
    const [bgColor, setBgColor] = useState('#FFFFFF'); 
    const [bgImage, setBgImage] = useState('');
    const [headerHeight, setHeaderHeight] = useState(20); 
    const [headerPadding, setHeaderPadding] = useState(10);
    const [color, setColor] = useState('#000000');
    const [fontSize, setFontSize] = useState(16);
    const [headerColor, setheaderColor] = useState('#000000');
    const [headerFontSize, setHeaderFontSize] = useState(32);
    const [watermarkText, setWatermarkText] = useState('');
    const [inputValue, setInputValue] = useState();


    const handleFontFamilychange = (value) => {
        const editor = document.querySelector('#editor > div');
        editor.style.fontFamily = value;
    }

    const handleWatermarkTextChange = (value) => {
        setWatermarkText(value);
    };
    
    const handleColorChange = (newColor) => {
        if (currentElement !== null) {
            const updatedElements = [...droppedElements];
            const updatedHTML = updatedElements[currentElementIndex].html.replace(/(?:color:\s*(undefined|#(?:[0-9a-fA-F]{3}){1,2});?)/g, `color: ${newColor};`);
            updatedElements[currentElementIndex] = { ...updatedElements[currentElementIndex], html: updatedHTML, color: newColor };
            setDroppedElements(updatedElements);
        }
    }

    const changeFontSize = (delta) => {
        if (currentElement !== null) {
            const updatedElements = [...droppedElements];
            const element = updatedElements[currentElementIndex].html;
            const fontSizeRegex = /font-size:\s*(\d+)px;/i;
            const match = element.match(fontSizeRegex);
    
            let currentFontSize = match ? parseInt(match[1], 10) : 16; 
    
            const newFontSize = currentFontSize + delta;
            const updatedHTML = updatedElements[currentElementIndex].html.replace(fontSizeRegex, `font-size: ${newFontSize}px;`);
            
            updatedElements[currentElementIndex] = { ...updatedElements[currentElementIndex], html: updatedHTML, fontSize: newFontSize };
            setDroppedElements(updatedElements);
        }
    };


    const handleBgColorChange = (e) => {
        setBgImage(null);
        setBgColor(e.target.value);
        const rightColunm = document.getElementById('rightColunm');
        rightColunm.style.background = e.target.value;
    };

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setLogoImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setBgImage(reader.result);
            setBgColor(null);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const togglePickerVisible = () => setPickerVisible(prevState => !prevState);
    const increaseFontSize = () => changeFontSize(1);
    const decreaseFontSize = () => changeFontSize(-1);
    const handleHeightChange = (e) => setHeaderHeight(parseInt(e.target.value)); 
    const handlePaddingChange = (e) => setHeaderPadding(e.target.value); 
    const handleOpacityChange = (e) => setBgImageOpacity(e.target.value);
    const handleTextColorChange = (e) => setColor(e.target.value);
    const handleTextFontChange = (e) => setFontSize(e.target.value);
    const handleHeaderColorChange = (e) => setheaderColor(e.target.value);
    const handleHeaderFontChange = (e) => setHeaderFontSize(e.target.value);

   

    const renderElement = (element, index) => {
        const handleDelete = () => {
            deleteElement(index);
        };

        const handleCloneElement = () => {
            cloneElement(index)

        };

        const setCurrentElementOnFocus = () => {
            setCurrentElement(element);
            setCurrentElementIndex(index);
        }

        return (
            <Draggable key={element.id}>
                <div
                    key={element.id}
                    className="element-container"
                    draggable
                    onDragStart={(e) => {
                        e.dataTransfer.setData('elementIndex', index.toString());
                    }}
                    style={{ position: 'relative', margin: '10px 0' }}
                    tabIndex={0} 
                    onFocus={setCurrentElementOnFocus}
                >
                     <button
                        onClick={handleCloneElement}
                    >
                        Clone
                    </button>
                    <button
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                    <button onClick={increaseFontSize}>Increase Font Size</button>
                    <button onClick={decreaseFontSize}>Decrease Font Size</button>
                    <button onClick={togglePickerVisible}>Pick Color</button>
                    <RenderHTML
                        HTML={element.html} 
                    />
                </div>
            </Draggable>  
        );
    };

    return (
        <>
            <div
                id="editor"
                ref={editorRef}
                onDragOver={handleDragOverInEditor}
                onDrop={handleDropInEditor}
            >
                
                <div className='editor-container'>
                    <Header
                        bgImageOpacity={bgImageOpacity}
                        bgColor={bgColor}
                        bgImage={bgImage}
                        headerHeight={headerHeight}
                        headerPadding={headerPadding}
                    />
                    <main className='editor-main-body'>
                        {droppedElements.map((element, index) => renderElement(element, index))}
                        <ResumeData 
                            textColor={color} 
                            textFontSize={fontSize}
                            headerColor={headerColor}
                            headerFontSize={headerFontSize}
                        />   
                    <Footer/>
                    <Watermark
                            logoImage={logoImage}
                            watermarkText={watermarkText}
                            fontSize={headerFontSize}
                            color={bgColor}
                        />
                    </main>  
                </div> 
            </div>
            <div className='tools-in-editor-container'>
                    <div>
                        <ColorPicker onChange={handleColorChange} />
                    </div>
                    <Tools
                        increaseFontSize={increaseFontSize}
                        decreaseFontSize={decreaseFontSize}
                        togglePickerVisible={togglePickerVisible}
                        handleTextColorChange={handleTextColorChange}
                        color={color}
                        handleTextFontChange={handleTextFontChange}
                        handleHeaderColorChange={handleHeaderColorChange}
                        headerColor={headerColor}
                        handleHeaderFontChange={handleHeaderFontChange}
                        handleLogoUpload={handleLogoUpload}
                        handleImageUpload={handleImageUpload}
                        handleBgColorChange={handleBgColorChange}
                        bgColor={bgColor}
                        handleOpacityChange={handleOpacityChange}
                        bgImageOpacity={bgImageOpacity}
                        handleHeightChange={handleHeightChange}
                        headerHeight={headerHeight}
                        handlePaddingChange={handlePaddingChange}
                        headerPadding={headerPadding}
                        onWatermarkTextChange={handleWatermarkTextChange}
                        watermarkText={inputValue}
                        onFontChange={handleFontFamilychange}
                    />
            </div>
        </>
    );
};

export default Editor;
