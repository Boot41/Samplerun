import React from 'react';
import Header from './Header';
import Footer from './Footer';
import JobPostingForm from './JobPostingForm';
import JobListingManager from './JobListingManager';

const EmployerDashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Header />
      <div className="flex flex-grow">
        <div className="w-1/3 bg-light-blue-100 p-4 shadow-md">
          <JobPostingForm />
        </div>
        <div className="w-2/3 p-4">
          <JobListingManager />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmployerDashboard;