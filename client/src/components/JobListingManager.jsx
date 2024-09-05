import React, { useState } from 'react';

const JobListingManager = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [jobs, setJobs] = useState([
        { id: 1, title: 'Software Engineer', company: 'Tech Co', location: 'Remote', datePosted: '2023-10-01' },
        { id: 2, title: 'Product Manager', company: 'Business Inc', location: 'New York', datePosted: '2023-10-05' },
        // Add more job listings as needed
    ]);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this job posting?')) {
            setJobs(jobs.filter(job => job.id !== id));
        }
    };

    const filteredJobs = jobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: '20px', background: 'white', color: 'dark-gray' }}>
            <input
                type="text"
                placeholder="Search by title or company"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search jobs"
                style={{ marginBottom: '20px', padding: '10px', width: '100%', boxSizing: 'border-box' }}
            />
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ background: 'lightgray' }}>
                    <tr>
                        <th style={{ padding: '10px', fontWeight: 'bold', fontSize: '16px' }}>Title</th>
                        <th style={{ padding: '10px', fontWeight: 'bold', fontSize: '16px' }}>Company</th>
                        <th style={{ padding: '10px', fontWeight: 'bold', fontSize: '16px' }}>Location</th>
                        <th style={{ padding: '10px', fontWeight: 'bold', fontSize: '16px' }}>Date Posted</th>
                        <th style={{ padding: '10px', fontWeight: 'bold', fontSize: '16px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredJobs.map((job, index) => (
                        <tr key={job.id} style={{ background: index % 2 === 0 ? '#f9f9f9' : '#ffffff', cursor: 'pointer' }}>
                            <td style={{ padding: '10px', fontSize: '14px', fontWeight: 'bold' }}>{job.title}</td>
                            <td style={{ padding: '10px', fontSize: '14px', fontWeight: 'bold' }}>{job.company}</td>
                            <td style={{ padding: '10px', fontSize: '14px' }}>{job.location}</td>
                            <td style={{ padding: '10px', fontSize: '14px' }}>{job.datePosted}</td>
                            <td style={{ padding: '10px' }}>
                                <button style={{ background: 'blue', color: 'white', padding: '5px 10px', marginRight: '5px' }} aria-label="Edit job">Edit</button>
                                <button style={{ background: 'red', color: 'white', padding: '5px 10px' }} aria-label="Delete job" onClick={() => handleDelete(job.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default JobListingManager;