import React from 'react'
import { useState } from 'react';
import SplitCard from './SplitCard';
import { FaLink, FaMapMarkerAlt} from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { BsPersonWorkspace } from 'react-icons/bs'

const ExperienceItem = ({experience}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const fmt = (iso) =>
    new Date(iso).toLocaleDateString("en-SI", { month: 'short', year: 'numeric'});

  if(!experience) return null;
  let description = experience.description;

  if(!showFullDescription) {
    description = description.substring(0,90) + '...';
  }

  return (
    <div>
      <SplitCard>
        <SplitCard.Left>
          <a href={experience.link} target='_blank' 
              rel='noopener noreferrer' 
              className='font-bold text-xl block mb-4 inline-flex gap-1 
              text-stone-900 hover:text-blue-600 transition-colors duration-200 items-center'>
            {experience.company}
            <FaLink/>
          </a>
          <div className='mb-2 font-semibold inline-flex gap-1'>
            <BsPersonWorkspace />
            {experience.type}
          </div>
          <div className='mb-2 inline-flex gap-1'>
            <FaMapMarkerAlt />
            {experience.location}
          </div>
          <div className='mb-2 inline-flex gap-1'>
            <MdDateRange />
            {fmt(experience.start)} - {experience.end ? fmt(experience.end) : "today"}
          </div>
          
        </SplitCard.Left>
        <SplitCard.Right>
          <div className='font-bold text-l'>
            {experience.role}
          </div>
          <div className='mb-2'>
            {experience.highlights.map((h) =>(
              <div key={h}>- {h}</div>
            ))}
          </div> 
          <div className='mb-2'>{description}
            <button onClick={() => setShowFullDescription((prevState) => !prevState)}>
              <span className='text-stone-600 hover:text-stone-800 transition-colors 
              duration-200'>{showFullDescription ? "less" : "more"}</span>
            </button>
          </div>
           
        </SplitCard.Right>
      </SplitCard>
    </div>
  );
}

export default ExperienceItem