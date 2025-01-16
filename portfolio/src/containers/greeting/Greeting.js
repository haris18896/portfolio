import React, { useContext } from 'react';
import './Greeting.css';
import StyleContext from '../../contexts/StyleContext';
import {illustration, greeting} from '../../portfolio';
import {Zoom} from 'react-reveal';
import emoji from 'react-easy-emoji';
import DisplayLottie from '../../components/displayLottie/DisplayLottie';
import update from '../../assets/lottie/update';
import Button from '../../components/button/Button';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import styled from 'styled-components'


export default function Greeting() {
    const {isDark} = useContext(StyleContext);
    if(!greeting.displayGreeting){
        return null;
    }

    return(
        <Zoom Top duration={1000} distance="40px">
            <Background>
                <img src="./images/manOnTable.svg" alt="Man on Table" />
            </Background>
            <div className="greet-main" id="greeting">
                <div className="greeting-main">
                    <div classMain="greeting-text-div">
                        <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                            {" "}{greeting.title}{" "}
                            <span className="wave-emoji">{emoji("👋")}</span>
                        </h1>
                        <p classname={isDark ? "dark-mode greeting-text" : "greeting-text-p subtitle"} >
                            {greeting.subTitle}
                        </p>
                        <SocialMedia />
                        <div className="button-greeting-div">
                            <Button text="contact me" href="#contact" />
                            <Button text="See my Resume" href={greeting.resumeLink} newTab={true} />
                        </div>
                    </div>
                    <div className="greeting-image-div">
                        {illustration.animated ? (
                            <DisplayLottie animationData={update} />
                        ) : (
                            <img src={require("../../assets/images/blogging.svg")} alt="blogging" />
                        ) }
                    </div>
                </div>
            </div>
        </Zoom>
    )
}


const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.1;
    img{
        width: 100%;
        height: 100;
        object-fit: cover;
    }
`




