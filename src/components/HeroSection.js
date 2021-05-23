import React from 'react';
import '../App.css';
import './HeroSection.css';
import img1 from '../components/assets/learning_styles.jpg'
function HeroSection() {

    return (
        <div className="hero-container">
            <h1>Welcome to Intogen</h1>
            <p>Intogen is David Kolbs's research based web service which provides Uni-Due ISE students to identify thire preferred learning styles. 
            Learning style's data will be used as in to provide overview on the basis of there nationalities and education, also it will allow participants to do the survey online and see there results along with suggestions about courses which they might like to study with liked type learners.
           </p>
           <img src={img1} alt="learning styles" />
        </div>
    )
}

export default HeroSection
