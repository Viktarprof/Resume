import React from 'react'
import s from './index.module.css'

function ProjectsPages({title, description, image,link, tools}) {

  const allTools = tools.map(el => <p className={s.tools}>{el}</p>);

  return (
    <div className={s.cartProject}>
      <div className={s.cartInfo}>
        <a href={link} target="blank"><h2>{title}</h2></a>
        
          <div className={s.toolsContainer}>{allTools}</div>
      
        <p>{description}</p>
      </div>
      <a href={link} target="blank"><img width={200} src={image} alt={title} /></a>
    </div>
  )
}

export default ProjectsPages