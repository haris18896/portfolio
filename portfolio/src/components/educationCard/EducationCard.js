import React,{createRef, useContext} from 'react'
import './EducationCard.css';
import StyleContext from '../../contexts/StyleContext';
import { Slide, Rotate } from 'react-reveal';
import { educationInfo } from '../../portfolio';

export default function EducationCard({school}){
    const {isDark } = useContext(StyleContext);
    const imgRef = createRef();

    const GetDescBullets = ({descBullets}) => {
        return descBullets
          ? descBullets.map((item, i) => (
              <li key={i} className="subTitle">
                {item}
              </li>
            ))
          : null;
      };

    return(
        <div>
            <Rotate top left duration={1000}>
                <div className="education-card">
                <div className="education-card-left">
                    <img
                    crossOrigin={"anonymous"}
                    ref={imgRef}
                    className="education-roundedimg"
                    src={educationInfo.schools.logo}
                    alt={educationInfo.schools.schoolName}
                    />
                </div>
                    <div className="education-card-right">
                        <h5 className="education-text-school">{school.schoolName}</h5>
                        <div className="education-text-detail">
                            <h5 className={isDark ? "dark-mode education-text-subHeader" : "education-text-subHeader"}>
                                {school.subHeader}
                            </h5>
                            <p className={isDark ? "dark-mode education-text-duration": "education-text-duration" }>
                                {school.duration}
                            </p>
                            <div className="education-text-desc">{school.desc}</div>
                            <div className="education-text-bullets">
                                <ul>
                                    <GetDescBullets descBullets={school.descBullets} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Rotate>
            <Slide left duration={1000}>
                <div className="education-card-border"></div>
            </Slide>
        </div>
    )
}
