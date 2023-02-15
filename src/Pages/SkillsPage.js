import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faReact,
    faNodeJs,
    faJs,
    faPython,
    faJava,
    faSass,
    faBootstrap,
    faHtml5,
    faCss3,
    faAws,
    faApple,
    faGit,
    faConfluence,
    faJira,
    faUnity,
    faPhp,
    faAndroid,
    faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faBook, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { skills } from "../Data/data.js";

const TECH_STACK = "tech-stack";
const LANGUAGES = "language";

/**
 * Check with the names from skills data and give it the corresponding icon
 */
const skillIcons = {
    "React": faReact,
    "Sass": faSass,
    "Bootstrap": faBootstrap,
    "HTML5": faHtml5,
    "CSS3": faCss3,
    "Node.js": faNodeJs,
    "AWS": faAws,
    "Java": faJava,
    "Doxygen": faBook,
    "Git-CLI": faGit,
    "Confluence": faConfluence,
    "Jira": faJira,
    "Unity": faUnity,
    "JavaScript": faJs,
    "PHP": faPhp,
    "MySQL": faDatabase,
    "Firebase": faDatabase,
    "AndroidStudio": faAndroid,
    "XCode": faApple,
    "MongoDb": faDatabase,
    "Wordpress": faWordpress,
};

function SkillsPage() {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const skillsByStack = Object.entries(
        skills.reduce((accumulator, skill) => {
            const stack = skill[TECH_STACK];
            accumulator[stack] = accumulator[stack] || [];
            accumulator[stack].push(skill);
            return accumulator;
        }, {})
    );

    function handleSkillHover(id) {
        setSelectedSkill(id);
    }

    return (
        <section className="skills" aria-labelledby="skills-heading">
            <h1 id="skills-heading" className="skills__heading">
                My Skills
            </h1>
            <div className="skills__grid">
                {skillsByStack.map(([stack, skills]) => (
                    <div key={stack} className={`skills__column skills__column--${stack}`}>
                        <h2 id={`skills-column-heading-${stack}`} className="skills__column-heading">
                            {stack}
                        </h2>
                        {stack.length > 0 &&
                            <div className="skills__row">
                                {skills.map((skill) => (
                                    <div
                                        key={skill.id}
                                        className={`skills__card ${selectedSkill === skill.id && "skills__card--selected"} common__card`}
                                        onMouseEnter={() => handleSkillHover(skill.id)}
                                        onMouseLeave={() => handleSkillHover(null)}
                                    >
                                        <FontAwesomeIcon
                                            icon={skillIcons[skill.name]}
                                            size="4x"
                                            library={skill.name === "Book" ? "faSolid" : "faBrands"}
                                            default={skill.name}
                                        />
                                        {selectedSkill === skill.id && <p className="skills__card-label">{skill.name}</p>}
                                    </div>
                                ))}
                            </div
                            >}
                    </div>
                ))}
            </div>
            <div className="languages__grid">
                <h2 id="languages-heading" className="languages__heading">
                    Programming Languages
                </h2>
                <div className="languages__row">
                    {skills
                        .filter((skill) => skill.type === LANGUAGES)
                        .map((skill) => (
                            <div
                                key={skill.id}
                                className={`languages__card ${selectedSkill === skill.id && "languages__card--selected"} common__card`}
                                onMouseEnter={() => handleSkillHover(skill.id)}
                                onMouseLeave={() => handleSkillHover(null)}
                            >
                                <FontAwesomeIcon
                                    icon={skillIcons[skill.name]}
                                    size="4x"
                                    library={skill.name === "Book" ? "faSolid" : "faBrands"}
                                />
                                {selectedSkill === skill.id && <p className="languages__card-label">{skill.name}</p>}
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsPage;
