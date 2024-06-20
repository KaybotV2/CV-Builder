import React from 'react';
import { Form, Field } from 'react-final-form';

const CandidateForm = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <h2>Candidate Details</h2>
        <div>
          <label>Name:</label>
          <Field name="name" component="input" placeholder="Full Name" />
        </div>
        <div>
          <label>Contact Information:</label>
          <Field name="contact" component="input" placeholder="Contact Information" />
        </div>
        <div>
          <label>Work Experience:</label>
          <Field name="workExperience" component="textarea" placeholder="Work Experience" />
        </div>
        <div>
          <label>Education:</label>
          <Field name="education" component="textarea" placeholder="Education" />
        </div>
        <div>
          <label>Skills:</label>
          <Field name="skills" component="textarea" placeholder="Skills" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )}
  />
);

export default CandidateForm;
