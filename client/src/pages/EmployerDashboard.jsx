import React from 'react';
import Header from './Header';
import JobPostingForm from './JobPostingForm';
import JobListingManager from './JobListingManager';

const EmployerDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header className="shadow-md sticky top-0 z-10" />
      <main className="flex-grow p-4">
        <JobPostingForm className="shadow-lg my-4" />
        <JobListingManager className="bg-light-gray p-4 rounded-lg shadow-md" />
      </main>
    </div>
  );
};

export default EmployerDashboard;