import React from 'react'
import { MdEmail } from 'react-icons/md';

const ButtonMailto = ({ mailto, label }) => {
  return (
    <a href={mailto}>
        <div className="flex flex-col bg-slate-300 transition delay-150 
                          duration-300 ease-in-out hover:translate-y-1 hover:scale-110 
                          hover:bg-slate-600 p-6 rounded-xl shadow-md h-full items-center
                          text-white">
            <div className='flex items-center gap-3 text-lg'>
                <MdEmail size='1.2em'/>{label}
            </div> 
        </div>
    </a>
  )
}

export default ButtonMailto