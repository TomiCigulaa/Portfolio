import React from 'react'
import { FaLink } from 'react-icons/fa';

const formatDate = (isoDate) =>
    isoDate ? new Date(isoDate).toLocaleDateString('en-SI', {month: 'short', year: 'numeric'}) : 'Today';
const EducationCard = ({ education }) => {
   
    if(!education) return null
    
    const {school, program, degree, start, end, status,links } = education;

  return (
    <div className="flex flex-col bg-slate-100 p-6 rounded-xl shadow-md h-full">
      <a 
        href={links.school} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex gap-1 items-center text-lg font-bold text-stone-800 hover:text-blue-600 transition-colors"
      >
        {school} <FaLink />
      </a>
      <p className="text-stone-700 mt-1">{program}</p>
      <p className="text-sm text-stone-500">{degree}</p>
      
      <div className="mt-auto text-sm text-stone-600 pt-4">
        <span>{formatDate(start)}</span> - <span>{formatDate(end) ? formatDate(end) : status}</span>
      </div>
    </div>
  )
}

export default EducationCard