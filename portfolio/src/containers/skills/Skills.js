import React, {useContext} from 'react';
import StyleContext from '../../contexts/StyleContext';
import { illustration, skillsSection } from '../../portfolio';
import './Skills.css';
import DisplayLottie from '../../components/displayLottie/DisplayLottie';
import codingPerson from '../../assets/lottie/codingPerson';
import {Fade, Roll} from 'react-reveal';
import SoftwareSkills from '../../components/softwareSkills/SoftwareSkills'



export default function Skills(){
    const {isDark} = useContext(StyleContext);
    if(!skillsSection.display){
        return null;
    }

    return(
        <div className={isDark ? "dark-mode main" : "main"}>
            <div className="skills-main-div">
                <Fade left duration={1000}>
                    <div className="skills-image-div">
                        {illustration.animated ? (
                            <DisplayLottie animationData={codingPerson} />
                        ) : (
                            <img
                            alt="coding Person"
                            src={require("../../assets/images/developerActivity.svg")}
                            />
                        )}
                    </div>
                </Fade>
                <Fade right duration={1000}>
                    <div className="skills-text-div">
                        <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
                            {skillsSection.title}{" "}
                        </h1>
                        <p className={isDark ? "dark-mode skills-subtitle skills-text-subtitle" : "skills-subtitle-p skills-text-subtitle"}>
                            {skillsSection.subTitle}
                        </p>
                        <SoftwareSkills />
                        <div>
                            {skillsSection.skills.map((skills, i) => {
                                return (
                                    <p key={i} className={isDark ? "dark-mode skills-subtitle skills-text": " skills-subtitle-p skills-text"}>
                                        {skills}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
