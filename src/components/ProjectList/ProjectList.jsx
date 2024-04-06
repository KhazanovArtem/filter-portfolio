import React from 'react'

export const ProjectList = ({filteredPhotos}) => {
  return (
    <ul className='pictures'>
        {filteredPhotos.map(el => (
            <div className='picture' key={filteredPhotos.indexOf(el)} >
                <img src={el.img} category={el.category}/>
            </div>
        ))}
    </ul>
  )
}
