import React, { useState } from 'react';

const JobPostingForm = ({ onSubmit }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [deadline, setDeadline] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!jobTitle || !description || !requirements) {
      setError('Please fill out all required fields.');
      setLoading(false);
      return;
    }

    onSubmit({ jobTitle, description, requirements, location, jobType, deadline });
    setLoading(false);
    alert('Job posted successfully!');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ 
        background: '#FFFFFF', 
        padding: '24px', 
        borderRadius: '4px', 
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
        maxWidth: '600px', 
        margin: 'auto' 
      }}
    >
      <h2 style={{ fontFamily: '"Roboto", sans-serif', fontWeight: '700', fontSize: '24px', color: '#212121' }}>Job Posting Form</h2>
      {error && <p style={{ color: '#F44336' }}>{error}</p>}
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#757575' }}>Job Title</label>
        <input 
          type="text" 
          value={jobTitle} 
          onChange={(e) => setJobTitle(e.target.value)} 
          placeholder="Enter job title" 
          required 
          style={{ 
            width: '100%', 
            padding: '8px', 
            borderRadius: '4px', 
            border: '1px solid #E0E0E0', 
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
            fontSize: '14px' 
          }} 
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#757575' }}>Description</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Enter job description" 
          required 
          style={{ 
            width: '100%', 
            padding: '8px', 
            borderRadius: '4px', 
            border: '1px solid #E0E0E0', 
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
            fontSize: '14px' 
          }} 
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#757575' }}>Requirements</label>
        <textarea 
          value={requirements} 
          onChange={(e) => setRequirements(e.target.value)} 
          placeholder="Enter job requirements" 
          required 
          style={{ 
            width: '100%', 
            padding: '8px', 
            borderRadius: '4px', 
            border: '1px solid #E0E0E0', 
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
            fontSize: '14px' 
          }} 
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#757575' }}>Location</label>
        <input 
          type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          placeholder="Enter job location" 
          style={{ 
            width: '100%', 
            padding: '8px', 
            borderRadius: '4px', 
            border: '1px solid #E0E0E0', 
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
            fontSize: '14px' 
          }} 
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#757575' }}>Job Type</label>
        <input 
          type="text" 
          value={jobType} 
          onChange={(e) => setJobType(e.target.value)} 
          placeholder="Enter job type" 
          style={{ 
            width: '100%', 
            padding: '8px', 
            borderRadius: '4px', 
            border: '1px solid #E0E0E0', 
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
            fontSize: '14px' 
          }} 
        />
      </div>
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#757575' }}>Application Deadline</label>
        <input 
          type="date" 
          value={deadline} 
          onChange={(e) => setDeadline(e.target.value)} 
          style={{ 
            width: '100%', 
            padding: '8px', 
            borderRadius: '4px', 
            border: '1px solid #E0E0E0', 
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
            fontSize: '14px' 
          }} 
        />
      </div>
      <button 
        type="submit" 
        style={{ 
          background: '#4CAF50', 
          color: '#FFFFFF', 
          padding: '12px 24px', 
          borderRadius: '4px', 
          border: 'none', 
          cursor: 'pointer', 
          transition: '0.3s ease-in-out' 
        }} 
        onMouseEnter={(e) => e.currentTarget.style.background = '#388E3C'} 
        onMouseLeave={(e) => e.currentTarget.style.background = '#4CAF50'}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default JobPostingForm;