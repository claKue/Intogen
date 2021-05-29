import React from 'react';
import '../App.css';
import './HeroSection.css';
import img1 from '../components/assets/learning_styles.jpg'

function HeroSection() {

    return (
        <div className="hero-container">
            <h1>Welcome to Intogen</h1>
            <p>Intogen is David Kolb's research based web service, which helps ISE students of the University Duisburg-Essen
to identify their preferred Learning Styles. The Learning style's data will be used to provide an overview on the basis of their nationalities and education.
After completing the survey, students are able to see suggested courses they might like to study based off of their Learning Style. <br/><br/>
Dataset overview: <br/>
1- Nationality <br/>
2- Education<br/>
3- Course suggestion with Learning Styles
           </p>
           <img className="bildHome" src={img1} alt="learning styles" />
        </div>
    )
}

export default HeroSection
