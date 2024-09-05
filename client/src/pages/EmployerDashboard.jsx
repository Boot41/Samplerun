import React from 'react';
import JobPostingForm from '../components/JobPostingForm';
import JobListingManager from '../components/JobListingManager';

const EmployerDashboard = () => {
  return (
    <div className="min-h-screen bg-primaryBackground font-roboto">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg flex items-center justify-between p-large">
        <div className="text-heading">Company Logo</div>
        <div className="flex space-x-medium">
          <button className="text-links">Profile</button>
          <button className="text-links">Logout</button>
        </div>
      </header>
      <main className="pt-large pb-large mt-medium flex flex-col md:flex-row gap-medium justify-between container mx-auto">
        <div className="flex-1 bg-white shadow rounded p-large">
          <h2 className="text-heading text-lg mb-medium">Post a Job</h2>
          <JobPostingForm />
        </div>
        <div className="flex-1 bg-white shadow rounded p-large">
          <h2 className="text-heading text-lg mb-medium">Manage Job Listings</h2>
          <JobListingManager />
        </div>
      </main>
      <footer className="bg-secondaryBackground p-large mt-auto">
        <div className="text-body text-center">
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default EmployerDashboard;