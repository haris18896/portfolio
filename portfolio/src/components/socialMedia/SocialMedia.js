import React from 'react';
import './SocialMedia.css';
import {socialMediaLinks} from '../../portfolio';

export default function SocialMedia(){
    if(!socialMediaLinks){
        return null;
    }

    return (
        <div className="social-media-div">
            {socialMediaLinks.github ? (
                <a
                    href={socialMediaLinks.github}
                    className="icon-button github"
                    target="_blank"
                    rel="noopener noreferrer" >
                        <i className="fab fa-github"></i>
                        <span></span>
                        </a>
            ) : null}
            {socialMediaLinks.linkedIn ? (
                <a
                    href={socialMediaLinks.linkedIn}
                    className="icon-button linkedIn"
                    target="_blank"
                    rel="noopener noreferrer" >
                        <i className="fab fa-linkedin-in"></i>
                        <span></span>
                        </a>
            ) : null}
            
            {socialMediaLinks.facebook ? (
                <a
                    href={socialMediaLinks.facebook}
                    className="icon-button facebook"
                    target="_blank"
                    rel="noopener noreferrer" >
                         <i className="fab fa-facebook-f"></i>
                        <span></span>
                        </a>
            ) : null}
            {socialMediaLinks.instagram ? (
                <a
                    href={socialMediaLinks.instagram}
                    className="icon-button instagram"
                    target="_blank"
                    rel="noopener noreferrer" >
                        <i className="fab fa-instagram"></i>
                        <span></span>
                        </a>
            ) : null}
            {socialMediaLinks.gmail ? (
                <a
                    href={socialMediaLinks.gmail}
                    className="icon-button gmail"
                    target="_blank"
                    rel="noopener noreferrer" >
                        <i className="fab fa-google"></i>
                        <span></span>
                        </a>
            ) : null}
            {socialMediaLinks.twitter ? (
                <a
                    href={socialMediaLinks.twitter}
                    className="icon-button twitter"
                    target="_blank"
                    rel="noopener noreferrer" >
                        <i className="fab fa-twitter"></i>
                        <span></span>
                        </a>
            ) : null}
            {socialMediaLinks.stackOverflow ? (
                <a
                    href={socialMediaLinks.stackOverflow}
                    className="icon-button stackOverflow"
                    target="_blank"
                    rel="noopener noreferrer" >
                        <i className="fab fa-stack-overflow"></i>
                        <span></span>
                        </a>
            ) : null}
        </div>
    )
}