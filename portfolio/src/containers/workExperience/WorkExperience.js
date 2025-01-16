import React, { useContext } from 'react';
import './WorkExperience.css';
import ExperienceCard from '../../components/experienceCard/ExperienceCard';
import {workExperiences} from '../../portfolio';
import LightSpeed from 'react-reveal/LightSpeed';
import StyleContext from '../../contexts/StyleContext';

export default function WorkExperience(){
    const {isDark} = useContext(StyleContext);
    if(workExperiences.display){
        return(
            <div id="experience">
                <LightSpeed right duration={1500} distance="30px">
                    <div className="experience-container" id="workExperience">
                        <div>
                            <h1 className="experience-heading">Experience</h1>
                            <div className="experience-card-div">
                                {workExperiences.experience.map((card, i) => {
                                    return(
                                        <ExperienceCard 
                                         key={i}
                                         isDark={isDark}
                                         cardInfo={{
                                             company: card.company,
                                             desc: card.desc,
                                             date: card.date,
                                             companyLogo: card.companyLogo,
                                             role: card.role,
                                             descBullets: card.descBullets
                                         }}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </LightSpeed>
            </div>
        )
    }
    return null;
}
