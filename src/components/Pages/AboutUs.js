import React from 'react';
import '../../App.css'
import img2 from '../assets/1.jpg';
import Footer from '../Footer'
import { makeStyles } from '@material-ui/core/styles';

 export default function AboutUs() {

    return (
        <>
        <hr class="border2" data-content="About Us"/>
        <h1 className="underTitle">Learn more<span className ="aboutusColorText"> About US </span>
        </h1>
            <p className="aboutusText">We are students from Uni-DUE (Universität Duisburg - Essen) ISE program Computer Engineering department (CE) major (Intelligent Networked Systems) 
            This web application is our practical project (Praxis projekt) under the supervision of Prof. Dr. Mohamed Amine Chatti.
            To provide this application, we needed to collect data from other ISE students. Thus we used Sample Surveys method to collect data. <br/>
            You can see the survey questions under Find Your Type. <br/>
            What will happen to your data? <br/>
            Each participant is anonymous by nature of the survey, this data will be used for visual analytics to help students to know about their learning styles and interesting visual analytics to check course suitability.
            Teachers and organisation can also use the service to improve learning experience of students later on when the web service is developed.
            </p>

           <Footer/>
        </>
    )
}

