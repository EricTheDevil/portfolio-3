import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import { experiences } from "../Data/data";
import 'react-vertical-timeline-component/style.min.css'; // Style

function Experience() {
    const [showMore, setShowMore] = useState([]);

    const handleClick = id => {
        setShowMore(prevShowMore => {
            const newShowMore = [...prevShowMore];
            newShowMore[id] = !newShowMore[id];
            return newShowMore;
        });
    };

    return (
        <section className="experience">
            <h1 className="experience-heading">Experience</h1>
            <VerticalTimeline>
                {experiences.map((experience, index) => {
                    const { id, time, title, company, shortDescription, technologies, description } = experience;
                    return (
                        <VerticalTimelineElement
                            key={id}
                            date={time}
                            iconStyle={{ background: "#fff", color: "#000" }}
                            icon={<FontAwesomeIcon icon={faBriefcase} />}
                        >
                            <h2 className="experience-title">
                                {title} at {company}
                            </h2>
                            {showMore[index] ? (
                                <div
                                    className={`experience-description ${showMore[index] ? "experience-description--expanded" : ""}`}
                                    id={`experience-description-${id}`}
                                    aria-hidden={!showMore[index]}
                                >
                                    {description.length > 0 &&
                                        description.map((descLine, descIndex) => (
                                            <p key={`${id}-${descIndex}`}>{descLine}</p>
                                        ))}
                                    <p>Technologies: {technologies}</p>
                                </div>
                            ) : (
                                <p>{shortDescription}</p>
                            )}

                            <button
                                className="experience-showMoreButton"
                                onClick={() => handleClick(index)}
                                aria-label={showMore[index] ? "Show Less" : "Show More"}
                            >
                                {showMore[index] ? "Show Less" : "Show More"}
                            </button>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </section>
    );
};

export default Experience;
