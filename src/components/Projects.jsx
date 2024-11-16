import React, { useState, useRef, useEffect } from 'react';
import { Building2, GraduationCap, ChevronDown, ChevronUp, Sun, Moon, Github, Link } from 'lucide-react';
import {ProjectCard} from "./ProjectDetails";



const Projects = ({projects, isDark}) => {
    const [expandedProjectId, setExpandedProjectId] = useState(null);

    return (
        <div className={`min-h-screen transition-colors duration-300 ${
            isDark ? 'bg-gray-900' : 'bg-[#f0f0f0]'
        }`}>


            <div className="max-w-6xl mx-auto px-8 pb-16 relative z-10">  {/* Added relative and z-10 */}

                <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Projects Portfolio
                </h2>
                {/* Update grid classes to be more responsive */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-4 auto-rows-fr">
                    {projects.map((project) => {
                        const isExpanded = expandedProjectId === project.id;
                        const cardStyle = isExpanded ? `ring-2 ring-offset-2 ${isDark ? 'ring-blue-500 ring-offset-gray-900' : 'ring-blue-400 ring-offset-gray-100'}` : '';

                        return (
                            <div key={project.id} className="grid-item relative">
                                <div className={`${cardStyle} transition-all duration-200 ${
                                    isExpanded ? 'transform scale-[1.02]' : ''
                                }`}>
                                    <ProjectCard
                                        project={project}
                                        isDark={isDark}
                                        isExpanded={isExpanded}
                                        onToggleExpand={() => setExpandedProjectId(
                                            expandedProjectId === project.id ? null : project.id
                                        )}
                                    />
                                </div>
                                {isExpanded && (
                                    <div
                                        className="fixed inset-0 bg-black bg-opacity-50 z-30"
                                        onClick={() => setExpandedProjectId(null)}
                                    >
                                        <div
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl mx-auto p-4"
                                            onClick={e => e.stopPropagation()}
                                        >
                                            <div
                                                className={`relative ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg p-6 shadow-2xl`}>
                                                {/* Close button */}
                                                <button
                                                    onClick={() => setExpandedProjectId(null)}
                                                    className={`absolute top-4 right-4 p-2 rounded-full hover:bg-opacity-80 ${
                                                        isDark ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                                                    }`}
                                                >
                                                    <ChevronUp className="w-5 h-5"/>
                                                </button>

                                                {/* Content */}
                                                <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    <h3 className={`font-semibold text-xl mb-4 pr-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                        {project.title}
                                                    </h3>

                                                    <p className="mb-6">
                                                        {project.fullDescription}
                                                    </p>

                                                    {project.keyFeatures && (
                                                        <div className="mb-6">
                                                            <h4 className={`font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                                Key Features:
                                                            </h4>
                                                            <ul className="list-disc space-y-2 ml-6">
                                                                {project.keyFeatures.map((feature, index) => (
                                                                    <li key={index}>{feature}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {project.challenges && (
                                                        <div className="mb-6">
                                                            <h4 className={`font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                                Technical Challenges:
                                                            </h4>
                                                            <ul className="list-disc space-y-2 ml-6">
                                                                {project.challenges.map((challenge, index) => (
                                                                    <li key={index}>{challenge}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

//export default Projects;