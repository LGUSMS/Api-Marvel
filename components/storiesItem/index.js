import React from 'react'
import Image from 'next/image'

export const StoriesItem = ({item}) => {
    return (
        <div className='content'>
        <div className='content-inner'>
        
       <div className='content-back'>
           <h1>{item.fullName}</h1>
           <ul>
               <li>
                   <strong>Title:</strong>{item.name}
               </li>

               <li>
                   <strong>Description:</strong>{item.description}
               </li>
               
               
               

               
           </ul>
       </div>
        </div>    
        </div>
    )
}
