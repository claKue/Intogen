import React from 'react';
import '../../App.css'
import Cards from '../Cards';
import Intro from '../Intro'
import Footer from '../Footer'


function Home() {
    return (
        <>
            <hr class="border2" data-content="Home"/>
            <Intro />

            <Cards />
            <Footer />
           
        </>
    )
}

export default Home;