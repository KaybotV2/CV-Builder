import React, { useState, useEffect } from 'react';
import { data } from '../constant/data';

const ResumeData = ({ textColor, textFontSize, headerColor, headerFontSize  }) => {
    const [resumeData, setResumeData] = useState({});

    useEffect(() => {
        setResumeData(data);
    }, []);

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
            <div style={{ flex: 2, margin: '0 10px 0 20px' }}>
                <h2 contentEditable style={headerStyle}>{resumeData.firstName} {resumeData.lastName}</h2>
                <p contentEditable style={textStyle}><strong>Email:</strong> {resumeData.email}</p>
                <p contentEditable style={textStyle}><strong>Phone:</strong> {resumeData.phoneNumber}</p>
                <p contentEditable style={textStyle}><strong>Address:</strong> {resumeData.address}</p>
                <p contentEditable style={textStyle}><strong>LinkedIn:</strong> <a href={resumeData.linkedin}>{resumeData.linkedin}</a></p>
                <p contentEditable style={textStyle}><strong>Description:</strong> {resumeData.description}</p>
                <h3 contentEditable style={headerStyle}>Experiences</h3>
                {resumeData.experiences && resumeData.experiences.map((exp, index) => (
                    <div key={index}>
                        <h4 contentEditable style={textStyle}>{exp.title} at {exp.company}</h4>
                        <p contentEditable style={textStyle}>{exp.location}</p>
                        <p contentEditable style={textStyle}>{exp.startDate} - {exp.endDate}</p>
                        <p contentEditable style={textStyle}>{exp.description}</p>
                    </div>
                ))}
                <h3 contentEditable style={headerStyle}>Education</h3>
                {resumeData.education && resumeData.education.map((edu, index) => (
                    <div key={index}>
                        <h4 contentEditable style={textStyle}>{edu.degree} in {edu.major}</h4>
                        <p contentEditable style={textStyle}>{edu.university || edu.school}, {edu.location}</p>
                        <p contentEditable style={textStyle}>{edu.startDate} - {edu.endDate}</p>
                        <p contentEditable style={textStyle}>{edu.description}</p>
                    </div>
                ))}
            </div>
            <div style={{ flex: 1 }}>
                <h3 contentEditable style={headerStyle}>Certifications</h3>
                {resumeData.certifications && resumeData.certifications.map((cert, index) => (
                    <div key={index}>
                        <h4 contentEditable style={textStyle}>{cert.name}</h4>
                        <p contentEditable style={textStyle}>{cert.date}</p>
                    </div>
                ))}

                <h3 contentEditable style={headerStyle}>Skills</h3>
                <ul>
                    {resumeData.skills && resumeData.skills.map((skill, index) => (
                        <li key={index} contentEditable style={textStyle}>{skill.name} - {skill.score}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ResumeData;
