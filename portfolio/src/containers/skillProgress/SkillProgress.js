import React from 'react';
import './SkillProgress.css';
import DisplayLottie from '../../components/displayLottie/DisplayLottie';
import {Fade} from 'react-reveal';
import Build from '../../assets/lottie/build';
import {illustration, techStack} from '../../portfolio';

export default function StackProgress(){
    if(techStack.viewSkillBars){
        return(
            <Fade bottom duration={1000} distance="20px">
                <div className="skills-container">
                    <div className="skill-bar">
                        <h1 className="skills-heading">Proficiency</h1>
                        {techStack.experience.map((exp, i) => {
                            const progressStyle = {width: exp.progressPercentage};
                            return (
                                <div key={i} className="skill">
                                    <i className={exp.fontAwesomeClassname}>{"  "}</i>
                                    <p>{" "}{exp.Stack} {" "}</p>
                                    <div className="meter">
                                        <span style={progressStyle}></span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="skills-image">
                        {illustration.animated ? (
                            <DisplayLottie animationData={Build} />
                        ): (
                            <img alt="skills"
                            src={require("../../assets/images/skill.svg")} />
                        )}
                    </div>
                </div>
            </Fade>
        );
    }
    return null;
}
