import React from 'react'
import person from "../assets/Icon_person.png"


function Header() {
  return (
    <div>
        <div className=''>
          {/* Apply flex and items-center to the container holding the h1 and img */}
          <div className='flex items-center'> 
            <h1 className='text-4xl'>Get Organized</h1>
            
            {/* Remove ml-300 and the translate since flex will handle alignment. 
                Add a class like ml-4 for some space between the text and the image. */}
            <img 
              src={person} 
              alt="person" 
              className='ml-300 h-10' // Added h-10 w-10 for a standard icon size, adjust as needed
            />

          </div>
        </div>
    </div>
  )
}

export default Header
