import React from 'react'
import './Education.css';
import EducationCard from '../../components/educationCard/EducationCard';
import { educationInfo } from '../../portfolio'

export default function Education(){
    if(educationInfo.display){
        return (
            <div className="education-section" id="education">
                <div className="education-heading">
                    <div className="education-container">
                        {educationInfo.schools.map(school => {
                            return(
                                <EducationCard school={school} />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
    return null;
}
