import React from 'react';
import { COMPANY_INFO } from '../../utils/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-300">
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">{COMPANY_INFO.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
