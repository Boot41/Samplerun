import React from 'react';

const JobPostSuccessNotification = ({ jobDetails, onClose }) => {
    return (
        <div 
            role="alert" 
            aria-live="assertive" 
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div 
                className="bg-white shadow-md rounded-lg p-6 w-80" 
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold text-heading mb-4">Job Posted Successfully!</h2>
                <p className="text-lg text-body mb-6">{jobDetails}</p>
                <div className="flex justify-between">
                    <button 
                        className="bg-primaryButton text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-green-600"
                    >
                        View Listing
                    </button>
                    <button 
                        className="bg-secondaryButton text-black py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-gray-300" 
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobPostSuccessNotification;