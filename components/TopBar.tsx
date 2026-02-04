import React from 'react';
import { Phone, Clock, Mail } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="hidden md:block bg-secondary text-gray-300 py-2 border-b border-gray-700">
      <div className="container mx-auto px-4 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-primary" />
            <span>+233 030 395 9318</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-primary" />
            <span>codeigrouplimited@yahoo.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-primary" />
          <span>Mon - Sat 08.00 To 17.00</span>
        </div>
      </div>
    </div>
  );
};