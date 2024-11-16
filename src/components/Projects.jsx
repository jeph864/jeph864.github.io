import React, { useState, useRef, useEffect } from 'react';
import { Building2, GraduationCap, ChevronDown, ChevronUp, Sun, Moon, Github, Link } from 'lucide-react';
import {ProjectCard} from "./ProjectDetails";
import TimelineEvent from "./Experience";



const Projects = () => {
    const [isDark, setIsDark] = useState(true);
    const [expandedProjectId, setExpandedProjectId] = useState(null);

    const projects = [
        {
            id: 1,
            title: "AI-Powered Data Analytics Platform",
            role: "Lead Developer",
            startDate: "Jan 2023",
            endDate: "Dec 2023",
            affiliation: "Research Lab",
            shortDescription: "Developed an analytics platform that uses machine learning to process and visualize large datasets, improving decision-making efficiency by 40%.",
            technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
            fullDescription: "Led the development of an innovative data analytics platform that combines traditional statistical analysis with modern machine learning techniques. The platform processes complex datasets and presents insights through an intuitive interface, enabling researchers and analysts to make data-driven decisions more efficiently.",
            keyFeatures: [
                "Real-time data processing pipeline",
                "Custom visualization engine",
                "Automated report generation",
                "Integration with multiple data sources"
            ],
            challenges: [
                "Optimized processing pipeline to handle large-scale datasets",
                "Implemented custom caching solution to improve query performance",
                "Developed automated data validation and cleaning procedures"
            ]
        },
        {
            id: 2,
            title: "Open Source Contribution Management Tool",
            role: "Core Contributor",
            startDate: "Jun 2023",
            endDate: null,
            affiliation: "Open Source Project",
            shortDescription: "Created a tool to streamline the management of open source contributions across multiple repositories.",
            technologies: ["TypeScript", "Node.js", "GraphQL", "GitHub API"],
            githubUrl: "https://github.com/username/project",
            liveUrl: "https://project-demo.com",
            fullDescription: "Designed and implemented a comprehensive tool that helps maintainers manage contributions across multiple repositories. Features include automated PR reviews, contributor statistics, and integration with major version control platforms.",
            challenges: [
                "Built scalable architecture to handle multiple repositories",
                "Implemented real-time updates using WebSocket",
                "Created efficient caching system for API responses"
            ]
        },
        {
            id: 3,
            title: "Secure Document Management System",
            role: "Technical Lead",
            startDate: "Mar 2023",
            endDate: "Sep 2023",
            affiliation: "Enterprise Solutions Inc",
            shortDescription: "Built an end-to-end encrypted document management system for handling sensitive corporate data.",
            technologies: ["Java", "Spring Boot", "Angular", "MongoDB", "Docker"],
            keyFeatures: [
                "End-to-end encryption",
                "Role-based access control",
                "Audit logging",
                "Version control"
            ],
            challenges: [
                "Implemented secure key management system",
                "Developed custom encryption layer",
                "Created automated backup and recovery system"
            ]
        }
    ];

    return (
        <div className={`min-h-screen transition-colors duration-300 ${
            isDark ? 'bg-gray-900' : 'bg-[#f0f0f0]'
        }`}>
            <div className="max-w-6xl mx-auto pt-8 px-8">
                <button
                    onClick={() => setIsDark(!isDark)}
                    className={`p-2 rounded-lg transition-colors ${
                        isDark
                            ? 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                    aria-label="Toggle theme"
                >
                    {isDark ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5"/>}
                </button>
            </div>


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

export default Projects;