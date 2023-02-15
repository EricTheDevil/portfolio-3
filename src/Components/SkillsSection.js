import React from "react";
import { fab } from "@fortawesome/free-brands-svg-icons";

/**
 * page for showing skills
 * not used
 * @param {*} param0 
 * @returns 
 */
function SkillsSection({ icon, skill, progress, years }) {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <div className="skill-icon"></div>
                <h1 className="skill-title">{skill}</h1>
                <h1 className="skill-years">
                    <span> {years} years of exp</span>
                </h1>
                <div className="skill-bar">
                    <div className="skill-progress">
                        <span>{progress}</span>
                        <div className="progress">
                            <div className="inner-progress" style={{ width: progress }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsSection;
