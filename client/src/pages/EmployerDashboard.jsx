import React from 'react';
import JobPostingForm from '../components/JobPostingForm';
import JobListingManager from '../components/JobListingManager';
import JobPostSuccessNotification from '../components/JobPostSuccessNotification';
import Footer from '../components/Footer';

const EmployerDashboard = () => {
    return (
        <div className="font-['Roboto'] bg-primaryBackground text-body">
            <header className="flex items-center justify-between p-medium bg-white shadow-md">
                <img src="/path/to/logo.png" alt="Company Logo" className="h-10" />
                <div className="relative">
                    <button className="p-small rounded border border-borderColors hover:bg-secondaryBackground transition">
                        Profile ▼
                    </button>
                </div>
            </header>
            <main className="flex p-large">
                <div className="w-1/4 p-medium">
                    <JobPostingForm />
                </div>
                <div className="w-3/4 p-medium">
                    <JobPostSuccessNotification />
                    <JobListingManager />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default EmployerDashboard;