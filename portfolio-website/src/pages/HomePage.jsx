import React from 'react'
import Hero from '../components/Hero';
import ExperienceList from '../components/ExperienceList'
import ProjectList from '../components/ProjectList';
import Education from '../components/Education';
import ContactLinks from '../components/ContactLinks';

const HomePage = () => {
  return (
    <>
        <Hero />
        <ExperienceList />        
        <ProjectList />
        <Education />
        <ContactLinks />
    </>
 )
}

export default HomePage