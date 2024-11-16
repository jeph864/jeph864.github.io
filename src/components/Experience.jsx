import React, { useState } from 'react';
import { Building2, GraduationCap, ChevronDown, ChevronUp, Sun, Moon, Github, Link } from 'lucide-react';
import { ProjectCard } from "./ProjectDetails";

// Timeline Event Component
const TimelineEvent = ({ event, isDark }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const getStyles = (type, isDark) => ({
        card: isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200',
        title: isDark ? 'text-white' : 'text-gray-900',
        text: isDark ? 'text-gray-300' : 'text-gray-600',
        subtext: isDark ? 'text-gray-400' : 'text-gray-500',
        iconContainer: isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white',
        iconBg: isDark ? 'bg-gray-800' : 'bg-gray-50',
        expandButton: isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-900',
        border: isDark ? 'border-gray-700' : 'border-gray-200',
        tag: isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700',
        dot: type === 'work' ? 'bg-blue-500' : 'bg-purple-500',
        badge: type === 'work' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700',
        dateText: isDark ? 'text-gray-400' : 'text-gray-500'
    });
    const styles = getStyles(event.type, isDark);

    const getIcon = (type) => {
        switch (type) {
            case 'work':
                return <Building2 className="w-5 h-5 text-blue-500" />;
            case 'education':
                return <GraduationCap className="w-5 h-5 text-purple-500" />;
            default:
                return <Building2 className="w-5 h-5 text-gray-500" />;
        }
    };

    return (
        <div className="relative pl-32 pb-8">
            {/* Timeline dates and dot */}
            <div className="absolute left-0 top-8 flex items-center">
                <span className={`text-sm font-medium ${styles.dateText} w-12 text-right`}>
                    {event.startYear}
                </span>
                <div className={`relative mx-2`}>
                    <div className={`w-4 h-4 rounded-full border-2 ${isDark ? 'border-gray-900' : 'border-[#f0f0f0]'} ${styles.dot}`} />
                </div>
                <span className={`text-sm font-medium ${styles.dateText} w-12`}>
                    {event.endYear || 'Present'}
                </span>
            </div>

            {/* Content container */}
            <div className={`rounded-lg border shadow-sm hover:shadow-md transition-all ${styles.card}`}>
                <div className="p-4">
                    <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 flex-shrink-0 rounded-lg border overflow-hidden flex items-center justify-center ${styles.iconContainer}`}>
                            {event.logoUrl ? (
                                <img
                                    src={event.logoUrl}
                                    alt={`${event.organization} logo`}
                                    className="w-full h-full object-contain p-1"
                                />
                            ) : (
                                <div className={`p-2 w-full h-full flex items-center justify-center ${styles.iconBg}`}>
                                    {getIcon(event.type)}
                                </div>
                            )}
                        </div>

                        <div className="flex-grow min-w-0">
                            <div className="flex items-start justify-between gap-2">
                                <div>
                                    <h3 className={`font-semibold text-lg ${styles.title} mb-1`}>
                                        {event.role}
                                    </h3>
                                    <p className={styles.text}>
                                        {event.organization}
                                    </p>
                                </div>
                                <span className={`flex-shrink-0 px-2 py-1 rounded-full text-xs font-medium ${styles.badge}`}>
                                    {event.type}
                                </span>
                            </div>
                            {event.location && (
                                <p className={`text-sm mt-1 ${styles.subtext}`}>
                                    {event.location}
                                </p>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`mt-4 flex items-center gap-1 text-sm font-medium ${styles.expandButton}`}
                    >
                        {isExpanded ? (
                            <>
                                <ChevronUp className="w-4 h-4" />
                                Show less
                            </>
                        ) : (
                            <>
                                <ChevronDown className="w-4 h-4" />
                                Show details
                            </>
                        )}
                    </button>
                </div>

                {isExpanded && (
                    <div className={`px-4 pb-4 pt-4 border-t ${styles.border}`}>
                        {event.description && (
                            <p className={`mb-4 ${styles.text}`}>
                                {event.description}
                            </p>
                        )}
                        {event.achievements && (
                            <div>
                                <h4 className={`font-medium mb-2 ${styles.title}`}>
                                    Key Achievements:
                                </h4>
                                <ul className={`list-disc space-y-1.5 ml-4 ${styles.text}`}>
                                    {event.achievements.map((achievement, index) => (
                                        <li key={index}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {event.technologies && (
                            <div className="mt-4">
                                <h4 className={`font-medium mb-2 ${styles.title}`}>
                                    Technologies:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {event.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className={`px-2.5 py-1 rounded-full text-sm ${styles.tag}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};


export default TimelineEvent;