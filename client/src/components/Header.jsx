// src/components/Header.js

import React, { useState } from 'react';
import { FaUser, FaCog, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="bg-primary text-base-100 py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold">Dev41</div>
      <div className="relative">
        <button onClick={toggleDropdown} className="text-xl focus:outline-none text-base-100">
          <FaUser />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-base-100 text-neutral border border-neutral rounded-lg shadow-lg w-48">
            <ul>
              <li className="px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer">
                <FaUser className="text-primary mr-3" />
                <span>Profile</span>
              </li>
              <li className="px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer">
                <FaCog className="text-neutral mr-3" />
                <span>Settings</span>
              </li>
              <li className="px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer">
                <FaQuestionCircle className="text-accent mr-3" />
                <span>Help</span>
              </li>
              <li className="px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer">
                <FaSignOutAlt className="text-red-600 mr-3" />
                <span>Logout</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
