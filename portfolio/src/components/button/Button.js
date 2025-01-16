import React from 'react';
import './Button.css';
import {Zoom} from 'react-reveal';

export default function Button ({text, className, href, newTab}){
    return(
        <Zoom Left duration={1000} distance="40px">
            <div className={className}>
                <a className="main-button" href={href}  target={newTab && '_blank'}>
                    {text}
                </a>
            </div>
        </Zoom>
    );
}