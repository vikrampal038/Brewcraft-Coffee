import React from 'react';
import AboutHero from '../Components/About/AboutHero';
import AboutPhilosophy from '../Components/About/AboutPhilosophy';
import AboutProcess from '../Components/About/AboutProcess';
import AboutLeadership from '../Components/About/AboutLeadership';

const About = () => {
    return (
        <div className="w-full">
            <AboutHero />
            <AboutPhilosophy />
            <AboutProcess />
            <AboutLeadership />
        </div>
    );
};

export default About;
