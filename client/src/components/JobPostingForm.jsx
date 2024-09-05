import React, { useState } from 'react';

const JobPostingForm = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [applicationDeadline, setApplicationDeadline] = useState('');
    const [skills, setSkills] = useState(['']);
    const [feedback, setFeedback] = useState('');

    const handleSkillChange = (index, value) => {
        const newSkills = [...skills];
        newSkills[index] = value;
        setSkills(newSkills);
    };

    const addSkill = () => {
        setSkills([...skills, '']);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!jobTitle || !companyName || !jobDescription || !applicationDeadline || skills.some(skill => !skill)) {
            setFeedback('All fields are required.');
            return;
        }
        setFeedback('Job Posted Successfully!');
        // Implement submission logic here
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            style={{
              backgroundColor: 'lightgray', 
              padding: '15px', 
              borderRadius: '5px', 
              width: '100%', 
              maxWidth: '600px',
              margin: 'auto',
              display: 'flex',
              flexDirection: 'column',
            }}>
            <label style={{ fontSize: '16px', marginBottom: '5px' }}>Job Title</label>
            <input 
                type="text" 
                value={jobTitle} 
                onChange={(e) => setJobTitle(e.target.value)} 
                style={{ fontSize: '16px', marginBottom: '15px', padding: '10px', borderRadius: '5px', border: '1px solid gray' }} 
                aria-label="Job Title" 
            />
            <label style={{ fontSize: '14px', marginBottom: '5px' }}>Company Name</label>
            <input 
                type="text" 
                value={companyName} 
                onChange={(e) => setCompanyName(e.target.value)} 
                style={{ fontSize: '14px', marginBottom: '15px', padding: '10px', borderRadius: '5px', border: '1px solid gray' }} 
                aria-label="Company Name" 
            />
            <label style={{ fontSize: '14px', marginBottom: '5px' }}>Job Description</label>
            <textarea 
                value={jobDescription} 
                onChange={(e) => setJobDescription(e.target.value)} 
                style={{ fontSize: '14px', marginBottom: '15px', padding: '10px', borderRadius: '5px', border: '1px solid gray' }} 
                aria-label="Job Description" 
            />
            <label style={{ fontSize: '14px', marginBottom: '5px' }}>Application Deadline</label>
            <input 
                type="date" 
                value={applicationDeadline} 
                onChange={(e) => setApplicationDeadline(e.target.value)} 
                style={{ fontSize: '14px', marginBottom: '15px', padding: '10px', borderRadius: '5px', border: '1px solid gray' }} 
                aria-label="Application Deadline" 
            />
            <label style={{ fontSize: '14px', marginBottom: '5px' }}>Skills Required</label>
            {skills.map((skill, index) => (
                <input 
                    key={index} 
                    type="text" 
                    value={skill} 
                    onChange={(e) => handleSkillChange(index, e.target.value)} 
                    style={{ fontSize: '14px', marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid gray' }} 
                    aria-label={`Skill ${index + 1}`} 
                />
            ))}
            <button type="button" onClick={addSkill} style={{ marginBottom: '15px', backgroundColor: 'lightblue', padding: '10px', borderRadius: '5px', border: 'none' }}>Add Skill</button>
            <button 
                type="submit" 
                style={{
                    backgroundColor: 'blue', 
                    color: 'white', 
                    padding: '10px', 
                    borderRadius: '5px', 
                    border: 'none', 
                    cursor: 'pointer',
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'darkblue'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'blue'}
                aria-label="Submit Job Posting"
            >
                Submit
            </button>
            {feedback && <p style={{ color: 'red' }}>{feedback}</p>}
        </form>
    );
};

export default JobPostingForm;