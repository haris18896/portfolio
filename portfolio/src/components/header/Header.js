/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import './Header.css';
import Headroom from 'react-headroom';
import {
    greeting,
    workExperiences,
    skillsSection,
    educationInfo,
    openSource,
    blogSection,
    talkSection,
    achievementSection
  } from "../../portfolio";
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import StyleContext from '../../contexts/StyleContext';

function Header() {
    const {isDark} = useContext(StyleContext);
    const viewExperience = workExperiences.display;
    const viewOpenSource = openSource.display;
    const viewSkills = skillsSection.display;
    const viewEducation = educationInfo.display;
    const viewAchievement = achievementSection.display;
    const viewBlog = blogSection.display;
    const viewTalks = talkSection.display;
    
    return (
        <Headroom>
            <header className={isDark ? "dark-menu header" : "header"}>
                <a href="/" className="logo">
                    <span className="logo-name">{greeting.username}</span>
                </a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn" style={{color:"white"}}>
                    <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
                </label>
                <ul className={isDark ? "dark-menu menu": "menu"}>
                {viewSkills && (
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                )}
                {viewEducation && (
                    <li>
                        <a href="#education">Education</a>
                    </li>
                )}
                {viewExperience && (
                    <li>
                    <a href="#experience">Work Experiences</a>
                    </li>
                )}
                {viewOpenSource && (
                    <li>
                    <a href="#opensource">Open Source</a>
                    </li>
                )}
                {viewAchievement && (
                    <li>
                    <a href="#achievements">Achievements</a>
                    </li>
                )}
                {viewBlog && (
                    <li>
                    <a href="#blogs">Blogs</a>
                    </li>
                )}
                {viewTalks && (
                    <li>
                    <a href="#talks">Talks</a>
                    </li>
                )}
                <li>
                    <a href="#contact">Contact Me</a>
                </li>
                <li>
                    <a href="#">
                    <ToggleSwitch />
                    </a>
                </li>
                </ul>
            </header>
        </Headroom>

        )
}

export default Header
