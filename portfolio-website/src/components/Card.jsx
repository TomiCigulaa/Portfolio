import React from 'react'

const Card = ({ children, bg = 'bg-white rounded-4xl shadow-xl'}) => {
  return (
    <div className={`${bg} p-8 `}>
        {children}
    </div>
  )
}

export default Card