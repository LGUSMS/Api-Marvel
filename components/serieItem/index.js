import React from 'react'
import Image from 'next/image'

export const SerieItem = ({item}) => {
    return (
        <div className='content'>
        <div className='content-inner'>
        <div className='content-front'>
            <Image src={item.thumbnail.path +"/portrait_xlarge.jpg"} alt="imagem" width={200} height={100}  />
           
       </div>
       <div className='content-back'>
           <h1>{item.title}</h1>
           <ul>
               <li>
                   <strong>Title:</strong>{item.title}
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
