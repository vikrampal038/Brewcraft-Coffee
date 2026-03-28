import React from 'react';
import AboutHero from '../../Components/User/About/AboutHero';
import AboutPhilosophy from '../../Components/User/About/AboutPhilosophy';
import AboutProcess from '../../Components/User/About/AboutProcess';
import AboutLeadership from '../../Components/User/About/AboutLeadership';

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
