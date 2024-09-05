import React, { useState } from 'react';

const JobListingManager = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([
    { title: 'Software Engineer', company: 'TechCo', location: 'Remote', datePosted: '2023-10-01' },
    { title: 'Product Manager', company: 'BizInc', location: 'New York', datePosted: '2023-09-15' },
    // Add more job listings as needed
  ]);

  const handleDelete = (jobTitle) => {
    if (window.confirm(`Are you sure you want to delete ${jobTitle}?`)) {
      setJobs(jobs.filter(job => job.title !== jobTitle));
    }
  };

  const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div style={{ padding: '15px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ backgroundColor: '#f0f4f8', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>Job Listings</h1>
        <input
          type="text"
          placeholder="Search jobs..."
          aria-label="Search jobs"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }} 
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'} 
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
          Add Job
        </button>
      </header>
      <main style={{ backgroundColor: '#e9ecef', padding: '10px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: '2px solid #ccc', padding: '10px', fontSize: '16px', color: '#333' }}>Job Title</th>
              <th style={{ borderBottom: '2px solid #ccc', padding: '10px', fontSize: '16px', color: '#333' }}>Company</th>
              <th style={{ borderBottom: '2px solid #ccc', padding: '10px', fontSize: '16px', color: '#333' }}>Location</th>
              <th style={{ borderBottom: '2px solid #ccc', padding: '10px', fontSize: '16px', color: '#333' }}>Date Posted</th>
              <th style={{ borderBottom: '2px solid #ccc', padding: '10px', fontSize: '16px', color: '#333' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa' }}>
                <td style={{ padding: '10px', fontSize: '16px', color: '#333' }}>{job.title}</td>
                <td style={{ padding: '10px', fontSize: '16px', color: '#333' }}>{job.company}</td>
                <td style={{ padding: '10px', fontSize: '16px', color: '#333' }}>{job.location}</td>
                <td style={{ padding: '10px', fontSize: '16px', color: '#333' }}>{job.datePosted}</td>
                <td style={{ padding: '10px' }}>
                  <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', padding: '5px', marginRight: '5px', transition: 'background-color 0.3s' }} 
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'} 
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
                    Edit
                  </button>
                  <button style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', cursor: 'pointer', padding: '5px', transition: 'background-color 0.3s' }} 
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c82333'} 
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc3545'} 
                    onClick={() => handleDelete(job.title)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <footer style={{ backgroundColor: '#f0f4f8', padding: '10px', textAlign: 'center' }}>
        <button style={{ padding: '5px 10px', margin: '0 5px' }}>Previous</button>
        <button style={{ padding: '5px 10px', margin: '0 5px' }}>Next</button>
      </footer>
    </div>
  );
};

export default JobListingManager;