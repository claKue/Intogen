import React from 'react';
import '../../App.css'
import Cards from '../Cards';
import HeroSection from '../HeroSection'
import Footer from '../Footer'


function Home() {
    return (
        <>
            <hr class="border2" data-content="Home"/>
            <HeroSection />

            <Cards />
            <Footer />
           
        </>
    )
}

export default Home;