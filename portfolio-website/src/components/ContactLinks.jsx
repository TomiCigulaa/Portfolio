import React from 'react'
import ButtonMailto from './ButtonMailto';
import { FaGithub } from 'react-icons/fa';

const ContactLinks = () => {
  return (
    <section className='bg-stone-700 py-16'>
      <div className='w-2/3 mx-auto'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='flex-1'>

            <a href='https://github.com/TomiCigulaa' target='_blank' rel='noopener'>
            <div className="flex flex-col bg-slate-300 transition delay-150 
                          duration-300 ease-in-out hover:translate-y-1 hover:scale-110 
                          hover:bg-slate-600 p-6 rounded-xl shadow-md h-full items-center
                          text-white">
             <div className='flex items-center gap-3 text-lg'> 
              <FaGithub size='1.2em'/>Github
             </div>
            </div>
            </a>
          </div>
          <div className='flex-1'>
            <ButtonMailto label='Write me an E-Mail' mailto='mailto:tomi.cigula@gmail.com'/> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactLinks