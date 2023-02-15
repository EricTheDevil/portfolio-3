import React, { useState } from "react";
import { projects } from '../Data/data.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

function ProjectPage() {
    const [hoveredProject, setHoveredProject] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredProject(id);
    };

    const handleMouseLeave = () => {
        setHoveredProject(null);
    };

    return (
        <div className="projects">
            <h1 className="projects__title">My Projects</h1>
            <div className="projects__grid">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`projects__card ${hoveredProject === project.id ? "projects__card--hovered" : ""
                            }`}
                        onMouseEnter={() => handleMouseEnter(project.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            className="projects__card-image"
                            src={project.image}
                            alt={`Image of ${project.title} project`}
                        />
                        <div className="projects__card-info">
                            <h2 className="projects__card-title">{project.title}</h2>
                            <p className="projects__card-description">
                                {project.description}
                            </p>
                            <p className="projects__card-technologies">
                                {project.technologies}
                            </p>
                            <div className="projects__card-links">
                                {project.website && (
                                    <a
                                        className="projects__card-link"
                                        href={project.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View ${project.title} website`}
                                    >
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                )}
                                {project.repository && (
                                    <a
                                        className="projects__card-link"
                                        href={project.repository}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View ${project.title} repository`}
                                    >
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;