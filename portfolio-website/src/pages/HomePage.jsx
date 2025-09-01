import React from 'react'
import Hero from '../components/Hero';
import ExperienceList from '../components/ExperienceList'
import ProjectList from '../components/ProjectList';
import Education from '../components/Education';

const HomePage = () => {
  return (
    <>
        <Hero />
        <ExperienceList />        
        <ProjectList />
        <Education />
    </>
 )
}

export default HomePage