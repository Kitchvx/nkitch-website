import React from 'react'

const Tabs = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-[#92949c] border-b border-red-500' : 'text-white';
  
    return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-[#92949c] ${buttonClasses}`}>
            {children}
        </p>
    </button>
  )
}

export default Tabs;
