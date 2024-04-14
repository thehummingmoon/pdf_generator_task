import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocumentBtech from './PDFDocumentBtech'; // Assume you have a PDF template component
import PDFDocumentMtech from './PDFDocumentMtech';
const FormComponent = () => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('B.tech'); // Default course

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission
      // Additional logic if needed before PDF generation
    };
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          style={{ marginBottom: '10px', width: '100%', padding: '8px', borderRadius: '4px' }}
        />
        <br />
        <label htmlFor="course" style={{ display: 'block', marginBottom: '5px' }}>
          Course:
        </label>
        <select
          id="course"
          value={course}
          onChange={handleCourseChange}
          style={{ marginBottom: '10px', width: '100%', padding: '8px', borderRadius: '4px' }}
        >
          <option value="B.tech">B.tech</option>
          <option value="M.tech">M.tech</option>
        </select>
        <br />
        <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Submit
        </button>
        <span style={{ color: 'green', marginLeft: '10px' }}>
    <PDFDownloadLink
      document={course === 'B.tech' ? <PDFDocumentBtech name={name} course={course} /> : <PDFDocumentMtech name={name} course={course} />}
      fileName={`${name}_${course}_Offer.pdf`}
    >
      {({ blob, url, loading, error }) =>
        loading ? 'Generating PDF...' : 'Generate PDF'
      }
    </PDFDownloadLink>
  </span>
</form>

    </div>
  );
};

export default FormComponent;
