import React from 'react'
import Card from './Card'
import ProjectItem from './ProjectItem'
import ProjectsData from '../data/project.json'
import { useState, useEffect } from 'react'

const ProjectList = () => {
   const [projects, setProjects] = useState([]);
   useEffect(() =>{
    const fetchData = async () =>{
      try{
        setProjects(ProjectsData);
        console.log(projects);
      }catch(error) {
        console.log('Error fetching data' + error);
      }
    }
    fetchData();
   },[]);
   
  return (
    <section className='bg-stone-700 py-16'>
        <div className='w-2/3 mx-auto'>
            <Card>
                <h2 className='font-bold text-3xl font-mono pb-4'>PROJECTS</h2>
                {projects.map((project) =>(
                    <ProjectItem key={project.id} project={project}/>
                    ))}
            </Card> 
        </div>
    </section> 
  )
}

export default ProjectList