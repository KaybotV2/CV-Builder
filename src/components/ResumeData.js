import React, { useState, useEffect } from 'react';
import { data } from '../constant/data';

const ResumeData = ({ textColor, textFontSize, headerColor, headerFontSize }) => {
    const [resumeData, setResumeData] = useState({});

    useEffect(() => {
        setResumeData(data);
    }, []);

    const handleInput = (field, value) => {
        setResumeData(prevData => ({
            ...prevData,
            [field]: value
        }));
    };

    const handleNestedInput = (section, index, field, value) => {
        setResumeData(prevData => {
            const updatedSection = prevData[section].map((item, i) => 
                i === index ? { ...item, [field]: value } : item
            );
            return {
                ...prevData,
                [section]: updatedSection
            };
        });
    };

    const textStyle = {
        color: textColor,
        fontSize: `${textFontSize}px`
    };

    const headerStyle = {
        color: headerColor,
        fontSize: `${headerFontSize}px`
    };

    return (
        <div style={{ display: 'flex', textAlign: 'left' }}>
            <div id="leftColunm" style={{ flex: 2, margin: '0 10px 0 20px' }}>
                <h2 
                    style={headerStyle}
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={e => handleInput('name', e.target.innerText)}
                    dangerouslySetInnerHTML={{ __html: `${resumeData.firstName} ${resumeData.lastName}` }}
                ></h2>
                <p 
                    style={textStyle}
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={e => handleInput('email', e.target.innerText)}
                    dangerouslySetInnerHTML={{ __html: `<strong>Email:</strong> ${resumeData.email}` }}
                ></p>
                <p 
                    style={textStyle}
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={e => handleInput('phoneNumber', e.target.innerText)}
                    dangerouslySetInnerHTML={{ __html: `<strong>Phone:</strong> ${resumeData.phoneNumber}` }}
                ></p>
                <p 
                    style={textStyle}
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={e => handleInput('address', e.target.innerText)}
                    dangerouslySetInnerHTML={{ __html: `<strong>Address:</strong> ${resumeData.address}` }}
                ></p>
                <p 
                    style={textStyle}
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={e => handleInput('linkedin', e.target.innerText)}
                    dangerouslySetInnerHTML={{ __html: `<strong>LinkedIn:</strong> <a href="${resumeData.linkedin}">${resumeData.linkedin}</a>` }}
                ></p>
                <p 
                    style={textStyle}
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={e => handleInput('description', e.target.innerText)}
                    dangerouslySetInnerHTML={{ __html: `<strong>Description:</strong> ${resumeData.description}` }}
                ></p>
                <h3 style={headerStyle}>Experiences</h3>
                {resumeData.experiences && resumeData.experiences.map((exp, index) => (
                    <div key={index}>
                        <h4 
                            style={textStyle}
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={e => handleNestedInput('experiences', index, 'title', e.target.innerText)}
                            dangerouslySetInnerHTML={{ __html: `${exp.title} at ${exp.company}` }}
                        ></h4>
                        <p 
                            style={textStyle}
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={e => handleNestedInput('experiences', index, 'location', e.target.innerText)}
                            dangerouslySetInnerHTML={{ __html: exp.location }}
                        ></p>
                        <p 
                            style={textStyle}
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={e => handleNestedInput('experiences', index, 'startDate', e.target.innerText)}
                            dangerouslySetInnerHTML={{ __html: `${exp.startDate} - ${exp.endDate}` }}
                        ></p>
                        <p 
                            style={textStyle}
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={e => handleNestedInput('experiences', index, 'description', e.target.innerText)}
                            dangerouslySetInnerHTML={{ __html: exp.description }}
                        ></p>
                    </div>
                ))}
                <h3 style={headerStyle}>Education</h3>
                {resumeData.education && resumeData.education.map((edu, index) => (
                    <div key={index}>
                        <h4 
                            style={textStyle}
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={e => handleNestedInput('education', index, 'degree', e.target.innerText)}
                            dangerouslySetInnerHTML={{ __html: `${edu.degree} in ${edu.major}` }}
                        ></h4>
                        <p 
                            style={textStyle}
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={e => handleNestedInput('education', index, 'location', e.target.innerText)}
                            dangerouslySetInnerHTML={{ __html: `${edu.university || edu.school}, ${edu.location}` }}
                        ></p>
                        <p 
                            style={textStyle}
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={e => handleNestedInput('education', index, 'startDate', e.target.innerText)}
                            dangerouslySetInnerHTML={{ __html: `${edu.startDate} - ${edu.endDate}` }}
                        ></p>
                        <p 
                            style={textStyle}
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={e => handleNestedInput('education', index, 'description', e.target.innerText)}
                            dangerouslySetInnerHTML={{ __html: edu.description }}
                        ></p>
                    </div>
                ))}
            </div>
            <div id="rightColunm" style={{ flex: 1, padding: '0 0 0 2rem' }}>
                <h3 style={headerStyle}>Certifications</h3>
                {resumeData.certifications && resumeData.certifications.map((cert, index) => (
                    <div key={index}>
                        <h4 
                            style={textStyle}
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={e => handleNestedInput('certifications', index, 'name', e.target.innerText)}
                            dangerouslySetInnerHTML={{ __html: cert.name }}
                        ></h4>
                        <p 
                            style={textStyle}
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={e => handleNestedInput('certifications', index, 'date', e.target.innerText)}
                            dangerouslySetInnerHTML={{ __html: cert.date }}
                        ></p>
                    </div>
                ))}

                <h3 style={headerStyle}>Skills</h3>
                <ul>
                    {resumeData.skills && resumeData.skills.map((skill, index) => (
                        <li 
                            key={index}
                            style={textStyle}
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={e => handleNestedInput('skills', index, 'name', e.target.innerText)}
                            dangerouslySetInnerHTML={{ __html: `${skill.name} - ${skill.score}` }}
                        ></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ResumeData;
