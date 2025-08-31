import React from 'react'
import ExperienceItem from './ExperienceItem';
import { useState, useEffect} from 'react';
import ExperienceData from '../data/experience.json';
import Card from './Card'

const ExperienceList = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () =>{
      //const apiUrl = ExperienceData;
      try {
        //const res = await fetch(apiUrl);
        //const data = await res.json();
        //setExperiences(data);
        setExperiences(ExperienceData)
        console.log('Succes fetching experience data');
      }catch (error) {
        console.log('Error fetching experience data', error);
      } 
    }
    fetchExperiences();
  },[]);
  
  return (
    <section className='bg-stone-200 py-16'>
      <div className='w-2/3 mx-auto'>
        <Card>
        <h2 className='text-bold text-3xl font-mono font-bold pb-4'>EXPERIENCE</h2>
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </Card>
      </div>
    </section>
  )
}

export default ExperienceList