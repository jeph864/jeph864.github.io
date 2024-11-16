import {ChevronDown, ChevronUp, Github, Link} from "lucide-react";



const truncateDescription = (description) => {
    if (description.length <= 200) return description;
    return description.substring(0, 200).trim() + '... ';
};

const ProjectCard = ({ project, isDark, isExpanded, onToggleExpand }) => {
    const getStyles = (isDark) => ({
        card: isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200',
        title: isDark ? 'text-white' : 'text-gray-900',
        text: isDark ? 'text-gray-300' : 'text-gray-600',
        subtext: isDark ? 'text-gray-400' : 'text-gray-500',
        tag: isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700',
        link: isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700',
        expandButton: isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-900'
    });

    const styles = getStyles(isDark);
    const truncatedDescription = truncateDescription(project.shortDescription);
    const shouldShowDetails = project.shortDescription.length > 200 || project.fullDescription;

    return (
        <div className={`rounded-lg border shadow-sm hover:shadow-md transition-all ${styles.card} p-3 flex flex-col`}>
            <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className={`font-semibold text-base ${styles.title} line-clamp-2`}>
                    {project.title}
                </h3>

                {(project.githubUrl || project.liveUrl) && (
                    <div className="flex gap-1 flex-shrink-0">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.link} hover:scale-110 transition-transform`}
                                aria-label="GitHub Repository"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.link} hover:scale-110 transition-transform`}
                                aria-label="Live Demo"
                            >
                                <Link className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                )}
            </div>

            <p className={`text-sm font-medium ${styles.text}`}>
                {project.role}
            </p>

            <p className={`text-xs ${styles.subtext} mb-2 truncate`}>
                {project.startDate} - {project.endDate || 'Present'}
                {project.affiliation && ` • ${project.affiliation}`}
            </p>

            <p className={`text-sm ${styles.text} mb-2`}>
                {truncatedDescription}
                {project.shortDescription.length > 200 && !isExpanded && (
                    <button
                        onClick={onToggleExpand}
                        className={`${styles.expandButton} text-sm ml-1 hover:underline`}
                    >
                        Read more
                    </button>
                )}
            </p>

            <div className="mt-auto">
                <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className={`px-1.5 py-0.5 rounded-full text-[9px] font-medium leading-none ${styles.tag}`}
                        >
              {tech}
            </span>
                    ))}
                </div>

                {project.fullDescription && (
                    <button
                        onClick={onToggleExpand}
                        className={`flex items-center gap-1 text-sm font-medium w-full justify-center ${styles.expandButton} hover:opacity-80`}
                    >
                        {isExpanded ? (
                            <>
                                <ChevronUp className="w-4 h-4" />
                                Hide details
                            </>
                        ) : (
                            <>
                                <ChevronDown className="w-4 h-4" />
                                Show details
                            </>
                        )}
                    </button>
                )}
            </div>
        </div>
    );
};

export  {ProjectCard}