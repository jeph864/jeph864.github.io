import React from 'react';
import { contactInfo, socialLinks, personalInfo } from '../data/contact';

const ProfileSection = ({ isDark }) => {
    return (
        <div className={`px-4 py-6 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            {/* Profile Image */}
            <div className="relative w-32 h-32 mx-auto mb-4">
                <img
                    src={personalInfo.profileImage}
                    alt="Profile"
                    className={`rounded-full object-cover w-full h-full ring-4 ring-offset-2 
            ${isDark ? 'ring-gray-700 ring-offset-gray-900' : 'ring-gray-100 ring-offset-white'}`}
                />
                <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 
          ${isDark ? 'border-gray-900 bg-green-500' : 'border-white bg-green-500'}`}
                />
            </div>

            {/* Name and Title */}
            <div className="text-center mb-6">
                <h2 className={`text-xl font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {personalInfo.name}
                </h2>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {personalInfo.title}
                </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-3 mb-6">
                {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-lg transition-colors ${
                                isDark
                                    ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                            }`}
                            aria-label={social.label}
                        >
                            <Icon className="w-5 h-5" />
                        </a>
                    );
                })}
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
                {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                        <div key={index} className="flex items-center gap-3">
                            <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                <Icon className="w-4 h-4" />
                            </div>
                            {contact.href ? (
                                <a
                                    href={contact.href}
                                    className={`text-sm truncate transition-colors ${
                                        isDark
                                            ? 'text-gray-300 hover:text-white'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    {contact.label}
                                </a>
                            ) : (
                                <span className={`text-sm truncate ${
                                    isDark ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                  {contact.label}
                </span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProfileSection;