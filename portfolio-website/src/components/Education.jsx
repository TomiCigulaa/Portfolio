import React from 'react'
import { useState, useMemo, useEffect } from 'react';
import EducationsData from '../data/education.json';
import EducationCard from './EducationCard';

const Education = () => {
    const [educations, setEducations] = useState([]);
    
    useEffect(() =>{
       const fetchData = async () =>{
        try{
            setEducations(EducationsData);
        } catch(error) {
            console.log('Error fetching education data' + error);
        }
       }
       fetchData();
    }, []);

    const highSchool = useMemo(
        () => educations.find(e => e.id === '1'),
        [educations]
    );

    const university = useMemo(
        () => educations.find(e => e.id === '2'),
        [educations]
    );

  return (
     <section className='bg-stone-100 py-20'>
        <div className='w-2/3 mx-auto'>
            
            <h2 className='font-bold text-3xl font-mono pb-8'>
                Education
            </h2>
            
            <div className='flex flex-col md:flex-row gap-8'>
                
                <div className='flex-1'>
                    <EducationCard education={university} />
                </div>
                
                <div className='flex-1'>
                    <EducationCard education={highSchool} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education