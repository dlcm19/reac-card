import React from 'react'

const card = ({objInfo}) => {

    
  return (
    <article className={`hobbies list${objInfo.number}`}>
        <h2>{objInfo.tittle}</h2>
      <ul>
        <li>{objInfo.list[0]}</li>
        <li>{objInfo.list[1]}</li>
        <li>{objInfo.list[2]}</li>
      </ul>
  </article>
  )
}

export default card
