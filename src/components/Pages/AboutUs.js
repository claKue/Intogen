import React from 'react';
import '../../App.css'
import img2 from '../assets/1.jpg';
import Footer from '../Footer'

export default function AboutUs() {
    return (
        <>
        <h1 className="aboutus">ABOUT US</h1>
        <h2>Welcome to Intogen</h2>
            <p>We are students from Uni-DUE (Universität Duisburg - Essen) ISE program Computer Engineering department (CE) major (Intelligent Networked Systems) </p>
            <p>This web application is our practical project (Praxis projekt) under the supervision of Prof. Dr. Mohamed Amine Chatti. </p>
            <p>To provide this application, we needed to collect data from other ISE students. Thus we used Sample Surveys method to collect data. </p>
            <p>You can see the survey questions under Find Your Type.</p>
            <p>What will happen to your data?</p>
            <p>Each participant is anonymous by nature of the survey, this data will be used for visual analytics to help students to know about their learning styles and interesting visual analytics to check course suitability.</p>
            <p>Teachers and organisation can also use the service to improve learning experience of students later on when the web service is developed.
            </p>
           <img src={img2} alt="UDE" />

           <Footer/>
        </>
    )
}

